import { observer } from "mobx-react-lite";
import { SearchInput } from "../form/SearchInput/SearchInput";
import { searchSuggestionsService } from "../../lib/searchSuggestions.service";
import styles from "./RecipeSearch.module.css";

export const RecipeSearch: React.FC = observer(() => {


  return (
    <SearchInput 
      value={searchSuggestionsService.search}
      onChange={searchSuggestionsService.setSearch}
    />
  );
});
