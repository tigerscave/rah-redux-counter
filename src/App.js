import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      counter: 0
    }

    this.onCountPlus = () => {
      let { counter } = this.state; 
      this.setState({
        counter: ++counter
      }); 
    }; 

    this.onCountMinus = () => {
      let { counter } = this.state; 
      this.setState({
        counter: --counter
      });
    }; 
    this.onCountClear = () => {
      this.setState({
        counter: 0,
      });
    }; 
  }
  render() {
    let { counter } = this.state; 
    return (
      <div className="App">
        <h1>{counter}</h1> 
        <div>
          <button onClick={this.onCountPlus}>+</button> 
          <button onClick={this.onCountMinus}>-</button> 
          <button onClick={this.onCountClear}>C</button> 
        </div>
        <style jsx="true">{`
          .App {
            margin: 4rem;
            text-align: center;
          }
          h1 {
            font-size: 3rem;
          }
          button {
            padding: 0.6rem 3rem;
            font-size: 2rem;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
