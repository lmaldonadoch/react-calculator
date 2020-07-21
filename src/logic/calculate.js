import Operate from './operate';

const Calculate = (calculator, buttonName) => {
  const { total, next, operation } = calculator;

  if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(buttonName)) {
    if (operation) {
      return { total, next: next ? next + buttonName : buttonName, operation };
    }
    return { total: total ? total + buttonName : buttonName, next, operation };
  }

  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }
  if (buttonName === '+/-') {
    if (next) {
      return {
        total,
        next: Operate(next, '-1', 'X'),
        operation,
      };
    }
    return {
      total: Operate(total, '-1', 'X'),
      next,
      operation,
    };
  }
  if (buttonName === '.') {
    if (next) {
      return { total, next: next + buttonName, operation };
    } if (operation) {
      return { total, next: `0${buttonName}`, operation };
    }
    return { total: total + buttonName, next, operation };
  }
  if (buttonName === '=') {
    if (operation === '÷' && next === '0') {
      return {
        total: 'No division by 0',
        next: null,
        operation: null,
      };
    }
    return {
      total: next ? Operate(total, next, operation) : total,
      next: null,
      operation: null,
    };
  }
  if (operation) {
    if (operation === '÷' && next === '0') {
      return {
        total: 'No division by 0',
        next: null,
        operation: null,
      };
    }
    return {
      total: Operate(total, next, operation),
      next: null,
      operation: buttonName,
    };
  }
  return { total, next: null, operation: buttonName };
};

export default Calculate;
