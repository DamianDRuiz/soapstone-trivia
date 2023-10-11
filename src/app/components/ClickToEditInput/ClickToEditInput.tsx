import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from './ClickToEditInput.module.scss';

function ClickToEditInput({ value, setValue }: ClickToEditInputProps) {
  const [valueInput, setValueInput] = useState<string>(value);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleValueClick = () => {
    setIsEditing(true);
  };

  const handleValueInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValueInput(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValue(valueInput);
    setIsEditing(false);
  };

  const setFocusOnInput = () => {
    if (isEditing) document.getElementById(`clicktoedit-${value}`)?.focus();
  };

  useEffect(setFocusOnInput, [isEditing]);

  return (
    <div className={`${isEditing ? styles.editing : ''}`}>
      <span className={styles.value} onClick={handleValueClick}>
        {value}
      </span>
      <div className={styles.valueInput}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id={`clicktoedit-${value}`}
            onChange={handleValueInputChange}
          />
        </form>
      </div>
    </div>
  );
}

interface ClickToEditInputProps {
  value: string;
  setValue: (value: string) => void;
}

export default ClickToEditInput;
