import React from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import RenderMonster from './components/RenderMonsters';
import './styles/App.css';


class App extends React.Component {

  constructor () { 
    super();
    this.state = {
      monsters:[],
      searchField:''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(() => {
      return {monsters: users}
    },
    () => {
      console.log(this.state)
    }
    ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState({searchField})
  }
   
  render() {   
    const filterMonster = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })    
    
    return (
      <div>
          <NavBar />
          <SearchBar onSearchChange={this.onSearchChange} placeHolder='search monsters...' inputType='search' />
          <div className="card-list">
            <RenderMonster filterMonsters={filterMonster} />
          </div>
      </div>
    );
  }
}

export default App;