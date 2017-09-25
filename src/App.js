import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList'
import renderWorldMap from './components/WorldMap'


class App extends Component {

  state = {
    articles: [],
    country: ""
  }

  handleClick = (event) => {
    console.log(event, event.properties.name, "I AM CLICKING")
    const countryName = event.properties.name.toLowerCase()
    fetch('http://localhost:3000/api/v1/articles')
    .then(res => res.json())
    .then(res => this.setState({articles: res}))
    .then(res => this.setState({country: countryName}))
  }

  componentDidMount = () => {
    
    
    renderWorldMap(this.handleClick)
  }

  render() {
    return (
      <div className="App">
        <CardList articles={this.state.articles} country={this.state.country}/>
      </div>
    );
  }
}

export default App;
