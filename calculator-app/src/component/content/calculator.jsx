import React, { Component } from "react";
import Card from "./card";
import { connect } from "react-redux";
import DigitButton from "./calculator/digitButton.jsx";
import ACTIONS from "../../redux/actions.jsx";
import OperationButton from "./calculator/operationButton.jsx";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <Card>
        <div className="calculator">
          <div className="output">
            <div className="last-output">
              {this.props.lastOperand}
              {this.props.operation}
            </div>
            <div className="current-output">{this.props.currentOperand}</div>
          </div>
          <button className="button-ac">AC</button>
          <button onClick={this.props.delete_digit}>Del</button>
          <OperationButton operation={"÷"}></OperationButton>
          <DigitButton digit={"7"} />
          <DigitButton digit={"8"} />
          <DigitButton digit={"9"} />
          <OperationButton operation={"×"}></OperationButton>
          <DigitButton digit={"4"} />
          <DigitButton digit={"5"} />
          <DigitButton digit={"6"} />
          <OperationButton operation={"-"}></OperationButton>
          <DigitButton digit={"1"} />
          <DigitButton digit={"2"} />
          <DigitButton digit={"3"} />
          <OperationButton operation={"+"}></OperationButton>
          <DigitButton digit={"0"} />
          <DigitButton digit={"."} />
          <button className="button-equal">=</button>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    currentOperand: state.currentOperand,
    lastOperand: state.lastOperand,
    operation: state.operation,
  };
};

const mapDispatchToProps = {
  delete_digit: () => {
    return {
      type: ACTIONS.DELETE_DIGIT,
    };
  },
};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
