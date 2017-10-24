import React, {Component} from 'react';
import Header from './header';
import Btn from './Btn';
import Color from './Color';
import  './App.css';

class App extends Component {
  render() {
    return(
      <div id="App">
        <Header />
        <Color />
        <Btn />
      </div>
    )
  }
}

export default App;
