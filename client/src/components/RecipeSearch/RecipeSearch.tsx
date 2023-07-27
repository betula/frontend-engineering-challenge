import { observer } from "mobx-react-lite";
import { SearchInput } from "../form/SearchInput/SearchInput";
import { searchSuggestionsService } from "../../lib/searchSuggestions.service";
import styles from "./RecipeSearch.module.css";
import { RecipeSearchSuggestions } from "../RecipeSearchSuggestions/RecipeSearchSuggestions";

export const RecipeSearch: React.FC = observer(() => {
  return (
    <div className={styles.container}>
      <SearchInput 
        value={searchSuggestionsService.search}
        onChange={searchSuggestionsService.setSearch}
      />
      <div className={styles.suggestionsContainer}>
        <div className={styles.suggestions}>
          <RecipeSearchSuggestions />
        </div>
      </div>
    </div>
  );
});
