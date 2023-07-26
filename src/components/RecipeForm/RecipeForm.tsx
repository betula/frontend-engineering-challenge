import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import styles from "./RecipeForm.module.css";
import { Header } from "../Header/Header";
import { Input } from "../form/Input/Input";
import { Textarea } from "../form/Textarea/Textarea";
import { Select } from "../form/Select/Select";
import { RecipeFormLogic } from "./RecipeForm.logic";

export const RecipeForm: React.FC = observer(() => {
  const form = useMemo(() => new RecipeFormLogic(), []);
  const fields = form.group.fields;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.submit();
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Header title="Add new recipe" />

      <div className={styles.row}>        
        <Input
          label="Name"
          required
          value={fields.name.value}
          onChange={fields.name.setValue}
          />

        <Select
          label="Origin"
          placeholder="Country origin"
          options={form.options.origin}
          value={fields.origin.value}
          onChange={fields.origin.setValue}
          />
      </div>

      <Textarea 
        value={fields.description.value}
        onChange={fields.description.setValue}
        label="Description"
        placeholder="Describe your recipe..."
        limit={200}
        />

      <div className={styles.row}>
        <Select
          label="Difficulty"
          options={form.options.difficulty}
          value={fields.difficulty.value}
          onChange={fields.difficulty.setValue}
          />
        
        <Input
          label="Protein"
          value={fields.protein.value}
          onChange={fields.protein.setValue}
          placeholder="Fish, Meat, Plant?"
          />
      </div>

      <div className={styles.row}>
        <Input
          label="Produce"
          value={fields.produce.value}
          onChange={fields.produce.setValue}
          placeholder="Which products?"
          />
        <Input
          label="Spices"
          value={fields.spice.value}
          onChange={fields.spice.setValue}
          />
      </div>

      <div className={styles.row}>
        <Input
          label="Cooking Oil?"
          value={fields.cookingOil.value}
          onChange={fields.cookingOil.setValue}
          />

        <Input
          label="Volume"
          value={fields.volume.value}
          onChange={fields.volume.setValue}
          postfix="gramms"
          />
      </div>

      <div className={styles.row}>
        <Input
          label="Serves"
          value={fields.serves.value}
          onChange={fields.serves.setValue}
          postfix="people"
          />
        <Select
          label="Authenticity"
          options={form.options.authenticity}
          value={fields.authenticity.value}
          onChange={fields.authenticity.setValue}
          />
      </div>

      <Input
        label="Stock"
        value={fields.stock.value}
        onChange={fields.stock.setValue}
        />

      <button type="submit" className={styles.button}>
        Add Recipe
      </button>
    </form>
  );
});

