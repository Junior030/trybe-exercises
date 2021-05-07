// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  criar = () => {
    const div = document.querySelector('.App');
    const div2 = document.createElement('div');
    div2.style.width = '100%';
    div2.style.fontSize = '50px';
    div2.style.position = 'fixed'
    div2.style.top = '0'
    div2.innerHTML = 'Atualizado com sucesso';
    div.appendChild(div2);
    setTimeout(() => {div2.remove()}, 3000);
  }

  componentDidMount() {
    this.fetchCharacters();
  }
  componentDidUpdate() {
    this.criar();
  }
  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, species, image, location: url }) => {
            return (
              <div className="container" key={name}>
                <h3>Name: {name}</h3>
                <h4>Species: {species}</h4>
                <img src={image} alt={name}/>
                <a href={url}>Lacation</a>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
