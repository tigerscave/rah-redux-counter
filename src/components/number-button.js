import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { numberButton } from '../redux/modules/pageData';


const NumberButtons = (props) => {
  const { numberButton, index } = props;
  return (
    <div>
      <button
        className="number"
        value={index}
        onClick={e => numberButton(e)
        }
      >
        {index}
      </button>
      <style jsx="true">
        {`
        .number {
          padding: 0.3rem 1rem;
          font-size: 1rem;
          margin: 0.4rem;
        }
      `}
      </style>
    </div>
  );
};

numberButton.PropTypes = {
  numberButton: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  numberButton: e => dispatch(numberButton(Number(e.target.value))),
});
export default connect(null, mapDispatchToProps)(NumberButtons);
