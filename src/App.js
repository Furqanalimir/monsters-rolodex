import React, { Component } from 'react';
import './App.css';

import { CardList } from './component/card-list/card-list.component';

import { SearchBox } from './component/search-box/search.component.jsx'

class App extends Component{
  constructor(){
    super();
    this.state = {
    monsters: [ ],
    searchFeild: []
  };
}

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({ monsters: users }));
 }
  render(){

    let { monsters, searchFeild } = this.state;
    
    const filteredMonster = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchFeild)
    )

    return ( 
    <div className="App">
    <h1> Monsters Rodolex</h1>
    <SearchBox 
    placeholder="Search Monsters"
    handleChange={e => this.setState({searchFeild: e.target.value.toLowerCase()})}
     />
    
    <CardList monster={filteredMonster}/> 

    </div>
    );
  }
}
export default App;
