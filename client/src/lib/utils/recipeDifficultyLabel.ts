import difficultyDictionary from '../dictionary/difficulty.json';

interface Dictionary {
  [key: number]: string;
}

export const recipeDifficultyLabel = (difficulty: number) => {
  return (difficultyDictionary as Dictionary)[difficulty];
}