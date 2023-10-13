import { ChangeEvent, FormEvent, useState } from 'react';
import Player from '../Player/Player';
import styles from './AddPlayer.module.scss';

export function AddPlayer({ setPlayers }: AddPlayerProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue == '') return;
    setPlayers((draft: Player[]) => {
      draft.push({ name: inputValue, score: 0 });
    });
    setInputValue('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={'Add a user'}
        />
        <input
          type="submit"
          className={`roundButton ${styles.submit}`}
          value="+"
        />
      </form>
    </div>
  );
}

export interface AddPlayerProps {
  setPlayers: any;
}

export default AddPlayer;
