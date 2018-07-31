import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countUp, countDown, countClear, inputNumber } from '../redux/modules/pageData';

class App extends React.Component{
  constructor(props) {
    super(props); 
    this.state = {
      inputCount: ''
    }

    this.handleChange = (e) => {
      this.setState({
        inputCount: e.target.value,
      })
    }
  }
  render() {
    const { count, countUp, countDown, countClear, inputNumber } = this.props;
    const number = this.state.inputCount; 
    return (
      <div className="App">
        <h1>{count}</h1> 
        <div>
          <input 
            type="number"
            onChange={this.handleChange}
            value={this.state.inputNumber} />
          <button onClick={countUp}>+</button> 
          <button onClick={countDown}>-</button> 
          <button onClick={countClear}>C</button>
          <button onClick={() => inputNumber(number)}>Submit</button>  
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

const mapStateToProps = (state) => {  
  const { count } = state.pageData
  return {
    count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    countUp: () => dispatch(countUp()),
    countDown: () => dispatch(countDown()),
    countClear: () => dispatch(countClear()),
    inputNumber: (number) => dispatch(inputNumber(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
