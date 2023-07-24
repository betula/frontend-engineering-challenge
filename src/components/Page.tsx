import { FC } from "react";
import styles from "./Page.module.css";

import { SearchInput } from "./SearchInput/SearchInput";
import { RecipeHeader } from "./RecipeHeader/RecipeHeader";
import { RecipeInfo } from "./RecipeInfo/RecipeInfo";
import { RecipeCard } from "./RecipeCard/RecipeCard";

export const Page: FC = () => {
  return (
    <div className={styles.container}>
      <SearchInput />
      <RecipeHeader />
      <RecipeInfo />
      <RecipeCard />
    </div>
  );
};
