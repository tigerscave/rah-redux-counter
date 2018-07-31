import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countPlus, countMinus, countClear } from '../redux/action/counter-action';

class App extends Component {
  render() {
    const { count } = this.props; 
    return (
      <div className="App">
        <h1>{count}</h1> 
        <div>
          <button onClick={this.props.countPlus}>+</button> 
          <button onClick={this.props.countMinus}>-</button>
          <button onClick={this.props.countClear}>C</button> 
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

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  
  const { count } = state.count
  return {
    count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    countPlus: () => dispatch(countPlus()),
    countMinus: () => dispatch(countMinus()),
    countClear: () => dispatch(countClear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
