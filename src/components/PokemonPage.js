import React,{useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [search, setSearch] = useState('');
  const [pokeCollection, setPokeCollection]=useState([]);

  function handleAddToPage (addPoke) {
    setPokeCollection((curCol)=>[...curCol, addPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddToPage={handleAddToPage}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection search={search} pokeCollection={pokeCollection} setPokeCollection={setPokeCollection}/>
    </Container>
  );
}

export default PokemonPage;
