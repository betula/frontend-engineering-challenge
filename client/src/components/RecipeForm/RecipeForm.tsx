import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";
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
          {...fields.name.controlHandler}
          />

        <Select
          label="Origin"
          placeholder="Country origin"
          options={form.options.origin}
          {...fields.origin.controlHandler}
          />
      </div>

      <Textarea 
        label="Description"
        placeholder="Describe your recipe..."
        limit={200}
        {...fields.description.controlHandler}
        />

      <div className={styles.row}>
        <Select
          label="Difficulty"
          options={form.options.difficulty}
          {...fields.difficulty.controlHandler}
          />
        
        <Input
          label="Protein"
          placeholder="Fish, Meat, Plant?"
          {...fields.protein.controlHandler}
          />
      </div>

      <div className={styles.row}>
        <Input
          label="Produce"
          placeholder="Which products?"
          {...fields.produce.controlHandler}
          />
        <Input
          label="Spices"
          {...fields.spice.controlHandler}
          />
      </div>

      <div className={styles.row}>
        <Input
          label="Cooking Oil?"
          {...fields.cookingOil.controlHandler}
          />

        <Input
          label="Volume"
          postfix="gramms"
          {...fields.volume.controlHandler}
          />
      </div>

      <div className={styles.row}>
        <Input
          label="Serves"
          postfix="people"
          {...fields.serves.controlHandler}
          />
        <Select
          label="Authenticity"
          options={form.options.authenticity}
          {...fields.authenticity.controlHandler}
          />
      </div>

      <Input
        label="Stock"
        {...fields.stock.controlHandler}
        />

      <button type="submit" className={cn(styles.button, { 
        [styles.buttonInvalid]: form.group.invalid,
        [styles.buttonAnimatedStripes]: form.pending
      })}>
        Add Recipe
      </button>
    </form>
  );
});

