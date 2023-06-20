import React, {useState} from "react";
import { Form } from "semantic-ui-react";

const initNewPokeState = {name : '', hp : '', frontUrl : '', backUrl : ''}

function PokemonForm({handleAddToPage}) {
  const [newPokemon, setNewPokemon] = useState(initNewPokeState);


  function handleChange(e){

    setNewPokemon(currentPoke=> ({
      ...currentPoke, [e.target.name] : e.target.value, }))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting form...");
          //add pokemon to db, update state, and reset form state
          const pokeToDb = {name : newPokemon.name, hp : newPokemon.hp, sprites: {front : newPokemon.frontUrl, back : newPokemon.backUrl}}
          console.log(pokeToDb)

          fetch('http://localhost:3001/pokemon',{
            method  : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(pokeToDb),
          })
          .then(r=>r.json())
          .then(addPoke => handleAddToPage(addPoke))
          setNewPokemon(initNewPokeState); //reset form state
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPokemon.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newPokemon.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.frontUrl} 
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.backUrl} 
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
