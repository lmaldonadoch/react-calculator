import Operate from './operate';

const Calculate = (calculator, buttonName) => {
  const { total, next, operation } = calculator;

  if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(buttonName)) {
    if (operation) {
      return { total, next: next + buttonName, operation };
    }
    return { total: total + buttonName, next, operation };
  }

  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }
  if (buttonName === '+/-') {
    return {
      total: total * -1,
      next: next ? next * -1 : next,
      operation,
    };
  }
  if (buttonName === '.') {
    if (next) {
      return { total, next: next + buttonName, operation };
    }
    return { total: total + buttonName, next, operation };
  }
  if (buttonName === '=') {
    return {
      total: next ? Operate(total, next, operation) : total,
      next: null,
      operation: null,
    };
  }
  if (operation) {
    return {
      total: Operate(total, next, operation),
      next: null,
      operation: buttonName,
    };
  }
  return { total, next: null, operation: buttonName };
};

export default Calculate;
