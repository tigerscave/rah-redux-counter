import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countPlus } from '../redux/action/counter-action';

class App extends Component {
  // constructor(props) {
  //   super(props); 
  // }
    // this.state = {
    //   counter: 0
    // }

  //   this.onCountPlus = () => {
  //     let { counter } = this.state; 
  //     this.setState({
  //       counter: ++counter
  //     }); 
  //   }; 

  //   this.onCountMinus = () => {
  //     let { counter } = this.state; 
  //     this.setState({
  //       counter: --counter
  //     });
  //   }; 
  //   this.onCountClear = () => {
  //     this.setState({
  //       counter: 0,
  //     });
  //   }; 
  // }
  render() {
    const { count } = this.props; 
    return (
      <div className="App">
        <h1>{count}</h1> 
        <div>
          <button onClick={this.props.countPlus}>+</button> 
        
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
    dispatch: () => dispatch(countPlus())
  }
}

export default connect(mapStateToProps, {countPlus})(App);
