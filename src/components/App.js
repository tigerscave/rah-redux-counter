import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NumberButtons from './number-button';

import {
  countUp, countDown, countClear, inputNumber,
} from '../redux/modules/pageData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCount: '',
    };

    this.handleChange = (e) => {
      this.setState({
        inputCount: e.target.value,
      });
    };

    this.createButtons = () => {
      const buttons = [];
      for (let i = 1; i < 18; i++) {
        buttons.push(<NumberButtons key={i} index={i} />);
      }
      return buttons;
    };
  }

  render() {
    const {
      count, countUp, countDown, countClear, inputNumber,
    } = this.props;
    const number = this.state.inputCount;
    return (
      <div className="App">
        <div style={{ display: 'flex' }}>
          {this.createButtons()}
        </div>
        <h1>
          {count}
        </h1>
        <div>
          <input
            type="number"
            onChange={this.handleChange}
            value={this.state.inputNumber}
          />
          <button
            className="button"
            onClick={countUp}
          >
+
          </button>
          <button
            className="button"
            onClick={countDown}
          >
-
          </button>
          <button
            className="button"
            onClick={countClear}
          >
C
          </button>
          <button
            className="button"
            onClick={() => inputNumber(Number(number))}
          >
Submit
          </button>
          <div className="numbers">
            {[...Array(101)].map((x, i) => <NumberButtons key={i} index={i} />)}
          </div>
        </div>
        <style jsx="true">
          {`
          .App {
            margin: 4rem;
            text-align: center;
          }
          h1 {
            font-size: 3rem;
          }
          .button {
            padding: 0.6rem 3rem;
            font-size: 2rem;
          }
          .numbers {
            display: flex;
            flex-wrap: wrap;
          }
        `}
        </style>
      </div>
    );
  }
}

App.PropTypes = {
  inputNumber: PropTypes.func.isRequired,
  countClear: PropTypes.func.isRequired,
  countDown: PropTypes.func.isRequired,
  countUp: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  const { count } = state.pageData;
  return {
    count,
  };
};

const mapDispatchToProps = dispatch => ({
  countUp: () => dispatch(countUp()),
  countDown: () => dispatch(countDown()),
  countClear: () => dispatch(countClear()),
  inputNumber: number => dispatch(inputNumber(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
