import React, { Component } from "react";
import Card from "./card";
import { connect } from "react-redux";
import DigitButton from "./calculator/digitButton.jsx";
import ACTIONS from "../../redux/actions.jsx";
import OperationButton from "./calculator/operationButton.jsx";

class Calculator extends Component {
  state = {
    formater: Intl.NumberFormat("en-us"),
  };
  render() {
    return (
      <Card>
        <div className="calculator">
          <div className="output">
            <div className="last-output">
              {this.state.formater.format(this.props.lastOperand)}
              {this.props.operation}
            </div>
            <div className="current-output">
              {this.state.formater.format(this.props.currentOperand)}
            </div>
          </div>
          <button className="button-ac" onClick={this.props.clear}>
            AC
          </button>
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
          <button className="button-equal" onClick={this.props.evaluate}>
            =
          </button>
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
  clear: () => {
    return {
      type: ACTIONS.CLEAR,
    };
  },
  evaluate: () => {
    return {
      type: ACTIONS.EVALUATE,
    };
  },
};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
