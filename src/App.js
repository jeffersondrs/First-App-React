import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Blaster ",
          id: '1',
        },
  
        { 
          name: "Slasher ",
          id: '2',
        },
  
        { 
          name: "Smasher " ,
          id: '3',
        },
       {
        name: 'Bomber ',
        id: '4',
       },
        { 
          name: "Boomer ",
          id: '5',
        },
        {
          name: 'Volimer ',
          id: '6',
        }
      ],
      type: [
        {
          element: 'fire',
        },
        {
          element: 'water',
        },
        {
          element: 'earth',
        },

      ]
      
    };
  }

  render() {
    return <div className="App">
      {
        // this.state.type.map((tipo) => {
        //   return <div>
        //     {tipo.element}
        //   </div>
        // })}
        // {
        this.state.monsters.map((monster) => 
        {
          return <h1 key={monster.id}>{monster.name}</h1>
        })
      }
    </div>;
  }
}

export default App;
