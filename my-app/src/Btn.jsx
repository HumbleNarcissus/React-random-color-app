import React, {Component} from 'react';
import './App.css';

class Btn extends Component {

  colorDiv(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById('Color').style.backgroundColor = color;
    document.getElementById('colorName').innerHTML = color;
  }

  render() {
    return(
      <div>
        <button className="btn" onClick={() => this.colorDiv()}>Random Color</button>
        <p id="colorName">Click to generate random color!</p>
      </div>
    )
  }
}

export default Btn;
