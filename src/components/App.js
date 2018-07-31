import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countUp, countDown, countClear } from '../redux/modules/pageData';

const App = (props) => {
  const { count, countUp, countDown, countClear } = props; 
  return (
    <div className="App">
      <h1>{count}</h1> 
      <div>
        <button onClick={countUp}>+</button> 
        <button onClick={countDown}>-</button> 
        <button onClick={countClear}>C</button> 
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
    countClear: () => dispatch(countClear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
