import React, {Component} from 'react';
import { CardList, CardList2 } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//        <h1> Welcome bitch ! </h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  // displayName() {
  //   setState({name:'Menios'})
  // }

  //pass this example method as a prop to child component
  justConsole(){
    console.log('yeah ok right thats great !')
  }

  //lexical scoping with arrow functions so we have the this to refer to the Component
  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }

  render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
      return (
        <div className="App">
          <div>
            <h2> OUR FIRST APP </h2>
            <SearchBox placeholder="search monsters" handleChange={this.handleChange} justConsole={this.justConsole}/>
            <CardList monsters={filteredMonsters} /> 
            <hr></hr>
            <CardList2> 
              {this.state.monsters.map(child => {
                return(
                  <div key={child.id} className="single-card">
                    <p> {child.email}</p>
                    <p> {child.website }</p>
                  </div>
                )
              })}
            </CardList2>
          </div>
        </div>
    )
  }
}

export default App;
