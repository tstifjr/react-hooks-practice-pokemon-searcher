import React, {useState,useEffect} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({search, pokeCollection, setPokeCollection}) {


  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(r=>r.json())
    .then(data=>setPokeCollection(data))
  },[])

  const mySearch = pokeCollection.filter(pokemon => (pokemon.name.includes(search)))
  const renderAllCards = (search === '') ? pokeCollection.map(pokemon=><PokemonCard pokemon={pokemon} key={pokemon.id}/>) : mySearch.map(pokemon=><PokemonCard pokemon={pokemon} key={pokemon.id}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {renderAllCards}
    </Card.Group>
  );
}

export default PokemonCollection;
