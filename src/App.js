import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList'
import renderWorldMap from './components/WorldMap'


class App extends Component {

  state = {
    articles: []
  }

  handleClick = () => {
    console.log("I AM CLICKING")
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/articles')
    .then(res => res.json())
    .then(res => this.setState({articles: res}))
    
    renderWorldMap(this.handleClick)
  }

  render() {
    return (
      <div className="App">
        <CardList articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
