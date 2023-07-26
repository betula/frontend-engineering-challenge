import { useState } from "react";
import styles from "./RecipeForm.module.css";
import { Header } from "../Header/Header";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Select } from "../Select/Select";

export const RecipeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [desription, setDescription] = useState('');
  const [protein, setProtein] = useState('');
  const [produce, setProduce] = useState('');
  const [spice, setSpice] = useState('');
  const [cookingOil, setCookingOil] = useState('');
  const [volume, setVolume] = useState('');
  const [serves, setServes] = useState('');
  const [stock, setStock] = useState('');

  const originOptions = {
    'es': 'Spain',
    'it': 'Italy'
  }
  const [origin, setOrigin] = useState('');

  const difficultyOptions = {
    '0': 'Easy',
    '1': 'Medium',
    '2': 'Hard'
  }
  const [difficulty, setDifficulty] = useState(Object.keys(difficultyOptions)[0]);

  const authenticityOptions = ['Verified', 'Unverified'];
  const [authenticity, setAuthenticity] = useState(authenticityOptions[0]);

  return (
    <form className={styles.container}>
      <Header title="Add new recipe" />

      <div className={styles.row}>        
        <Input
          label="Name"
          value={name}
          onChange={setName}
          />

        <Select
          label="Origin"
          placeholder="Country origin"
          options={originOptions}
          value={origin}
          onChange={setOrigin}
          />
      </div>

      <Textarea 
        value={desription}
        onChange={setDescription}
        label="Description"
        placeholder="Describe your recipe..."
        limit={200}
        />

      <div className={styles.row}>
        <Select
          label="Difficulty"
          options={difficultyOptions}
          value={difficulty}
          onChange={setDifficulty}
          />
        
        <Input
          label="Protein"
          value={protein}
          onChange={setProtein}
          placeholder="Fish, Meat, Plant?"
          />
      </div>

      <div className={styles.row}>
        <Input
          label="Produce"
          value={produce}
          onChange={setProduce}
          placeholder="Which products?"
          />
        <Input
          label="Spices"
          value={spice}
          onChange={setSpice}
          />
      </div>

      <div className={styles.row}>
        <Input
          label="Cooking Oil?"
          value={cookingOil}
          onChange={setCookingOil}
          />

        <Input
          label="Volume"
          value={volume}
          onChange={setVolume}
          postfix="gramms"
          />
      </div>

      <div className={styles.row}>
        <Input
          label="Serves"
          value={serves}
          onChange={setServes}
          postfix="people"
          />
        <Select
          label="Authenticity"
          options={authenticityOptions}
          value={authenticity}
          onChange={setAuthenticity}
          />
      </div>

      <Input
        label="Stock"
        value={stock}
        onChange={setStock}
        />

      <button type="submit" className={styles.button}>
        Add Recipe
      </button>
    </form>
  );
};

