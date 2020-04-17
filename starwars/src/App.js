import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';
import styled from "styled-components"

const PageTitle = styled.h1`
background-color: white;
    width: 20%;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;
  width:100%;
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starWarsCharacters, setStarWarsCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/people/`)
      .then((res) => {
        setStarWarsCharacters(res.data.results);
      })
      .catch((error) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <PageTitle>Characters</PageTitle>
      <CardContainer>
        {
        starWarsCharacters.map((character, index) => 
          <Character key={index}  character={character} />
      )
      }
      </CardContainer>
    </div>
  );
};
export default App;
