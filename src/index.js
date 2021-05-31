import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import characterContext from './context/characterContext';
import SingleCharacter from './components/SingleCharacter';
import characterReducer from './reducers/charactersReducer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const App = () => {
  const [characters, dispatch] = useReducer(characterReducer, [])
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    Axios.get('https://breakingbadapi.com/api/characters')
      .then(({ data }) => {
        const required_Details = data.map((detail) => {
          return {
            name: detail.name,
            birthday: detail.birthday,
            img: detail.img,
            nickname: detail.nickname,
            occupation: detail.occupation
          }
        })
        dispatch({
          type: 'POPULATE_CHARACTERS',
          characters: required_Details
        })
      })
      .catch(() => {
        console.log('Couldnt Fetch Data!!')
      });
  }, []);

  return (
    <characterContext.Provider value={{ visibility, setVisibility } }>
      <h3>Characters and episodes</h3>
      <div className="card-style">
        {characters.map((character) => <SingleCharacter key={character.name} {...character} />)}
      </div>
    </characterContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


reportWebVitals();
