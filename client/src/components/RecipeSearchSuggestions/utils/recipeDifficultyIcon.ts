
import easyIcon from "../assets/badge-easy.svg";
import mediumIcon from "../assets/badge-medium.svg";
import hardIcon from "../assets/badge-hard.svg";

interface Dictionary {
  [key: number]: string;
}

const dictionary: Dictionary = {
  0: easyIcon,
  1: mediumIcon,
  2: hardIcon
};

export const recipeDifficultyIcon = (difficulty: number) => {
  return dictionary[difficulty];
}