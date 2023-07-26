import { observer } from "mobx-react-lite";
import styles from "./RecipeSearch.module.css";
import { SearchInput } from "../form/SearchInput/SearchInput";
import { searchSuggestionsService } from "../../lib/searchSuggestions.service";

export const RecipeSearch: React.FC = observer(() => {


  return (
    <SearchInput 
      value={searchSuggestionsService.search}
      onChange={searchSuggestionsService.setSearch}
    />
  );
});
