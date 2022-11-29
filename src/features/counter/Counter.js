import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
class Counter extends Component {
  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <div className="App">
        <button className="button5" onClick={increment}>
          +
        </button>
        <p>{counter}</p>
        <button className="button5" onClick={decrement}>
          {' '}
          -
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
