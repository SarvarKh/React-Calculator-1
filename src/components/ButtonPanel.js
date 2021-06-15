// /* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  renderInput = (value) => {
    const { handleClick } = this.props;
    const operators = ['-', '+', '÷', 'x'];
    if (operators.includes(value) || value === '=') {
      return (
        <Button handleClick={() => { handleClick(value); }} value={value} isOperator />
      );
    } if (value === '0') {
      return (
        <Button handleClick={() => { handleClick(value); }} value={value} isZero />
      );
    }
    return (
      <Button handleClick={() => { handleClick(value); }} value={value} />
    );
  }

  render() {
    return (
      <div className="button-panel">
        <div className="row">
          {this.renderInput('AC')}
          {this.renderInput('+/-')}
          {this.renderInput('%')}
          {this.renderInput('÷')}
        </div>
        <div className="row">
          {this.renderInput('7')}
          {this.renderInput('8')}
          {this.renderInput('9')}
          {this.renderInput('x')}
        </div>
        <div className="row">
          {this.renderInput('4')}
          {this.renderInput('5')}
          {this.renderInput('6')}
          {this.renderInput('-')}
        </div>
        <div className="row">
          {this.renderInput('1')}
          {this.renderInput('2')}
          {this.renderInput('3')}
          {this.renderInput('+')}
        </div>
        <div className="row">
          {this.renderInput('0')}
          {this.renderInput('.')}
          {this.renderInput('=')}
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};
ButtonPanel.defaultProps = {
  handleClick: () => {},
};
