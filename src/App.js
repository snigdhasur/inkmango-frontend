import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList'

class App extends Component {

  state = {
    articles: []
  }


  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/articles')
    .then(res => res.json())
    .then(res => this.setState({articles: res}))
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
