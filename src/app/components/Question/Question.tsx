import { DEFAULT_TOKEN } from 'src/app/contants';
import styles from './Question.module.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
async function logQuestions() {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=1&token=${DEFAULT_TOKEN}`,
    { mode: 'no-cors' }
  );
  const movies = await response.json();
  console.log(movies);
}

async function getCategories() {
  const response = await fetch('https://opentdb.com/api_category.php', {
    mode: 'no-cors',
  });
  const movies = await response;
  return movies;
}

/* eslint-disable-next-line */
export interface QuestionProps {}

export function Question(props: QuestionProps) {
  const [categories, setCategories] = useState(null);
  const [options, setOptions] = useState();
  const [chosenCategory, setChosenCategory] = useState('9');
  const [chosenDifficulty, setChosenDifficulty] = useState('easy');
  const [question, setQuestion] = useState('');

  const handleCategoryChange = (e) => {
    setChosenCategory(e.target.value);
  };
  const handleDifficultyChange = (e) => {
    setChosenDifficulty(e.target.value);
  };
  const handleGenerate = () => {
    const fetchData = async () => {
      const result = await axios(
        `https://opentdb.com/api.php?amount=1&category=${chosenCategory}&difficulty=${chosenDifficulty}`
      );
      setQuestion(result.data);
      console.log(result.data);
    };

    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://opentdb.com/api_category.php');
      setCategories(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (categories === null) return;
    setOptions(
      categories.trivia_categories.map((category, i) => (
        <option key={i} value={category.id}>
          {category.name}
        </option>
      ))
    );
  }, [categories]);

  return (
    <div className={styles['container']}>
      <label>Category</label>
      <select value={chosenCategory} onChange={handleCategoryChange}>
        {options}
      </select>
      <label>Difficulty</label>
      <select value={chosenDifficulty} onChange={handleDifficultyChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button onClick={handleGenerate}>Generate Question</button>
      <p>
        <strong>Question</strong>:{' '}
        {question != '' ? question.results[0].question : ''}
      </p>
      <p>
        <strong>Answer</strong>:{' '}
        {question != '' ? (
          <>
            <span style={{ color: 'green' }}>
              {question.results[0].correct_answer}
            </span>
            , {question.results[0].incorrect_answers.join(', ')}
          </>
        ) : (
          ''
        )}
      </p>
    </div>
  );
}

export default Question;
