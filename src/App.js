import React, {Component} from 'react';
import './App.css';
import {Box} from './Components/Box';
import {ColorSelector} from './Components/ColorSelector';
import ChangeColor from './Components/ChangeColor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
  }

  selectColor = e => {
    this.setState({
      boxes: [...this.state.boxes, {box: e.target.value}],
    });
  };

  setFetchedColor = color => {
    this.setState({
      boxColor: color,
    });
  };

  removeBox = index => {
    return () => {
      const boxes = this.state.boxes;
      this.setState({boxes: boxes.filter(box => boxes.indexOf(box) != index)});
    };
  };

  render() {
    const boxes = this.state.boxes || null;

    const selectorStyle = {
      paddingBottom: '20px',
      clear: 'both',
    };
    return (
      <div className="App">
        <h1>My name is David</h1>
        <h1>The color is {this.state.boxColor || 'not selected'} </h1>
        <div style={selectorStyle}>
          {' '}
          <ColorSelector selectColor={this.selectColor} />
        </div>
        {boxes.map((box, index) => {
          return (
            <Box
              boxColor={boxes[index] ? boxes[index].box : null}
              key={index}
              index={index}
              removeBox={this.removeBox}
            />
          );
        })}
        {/*<ChangeColor setFetchedColor={this.setFetchedColor} />*/}
      </div>
    );
  }
}

export default App;
