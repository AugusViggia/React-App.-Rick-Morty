import "./App.css";
// import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Nav from './components/Nav/Nav'

import { useState } from "react";


function App() {

  const character = [
    {
      name: "Morty Smith",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      name: "Summer Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      name: "Beth Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
  ];

  const [characters, setCharacters] = useState(character);
  console.log(characters);

  const cambiarEstado = () => {
    setCharacters(characters.push(character))
  }

  // function Personajes(props) {
  //   const [characters, setCharacters] = useState(characters);

  //     setCharacters({
  //       ...characters,
  //     });
  // }

  function onSearch() {
    
  }

  return (
    <div className="App">

      <div>
        <Nav></Nav>
      </div>

      {/* <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div> */}

      <hr />

      {/* <div className="container">
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      </div> */}

      <hr />

      <div className="container">
        <Cards characters={characters} />
      </div>
      
      <hr />
    </div>
  );
}

export default App;
