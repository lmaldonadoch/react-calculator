import Big from 'big.js';

const Operate = ((number1, number2, operation) => {
  const bigNum1 = Big(number1);
  const bigNum2 = Big(number2);
  if (operation === '%') {
    return bigNum2 === 0 ? '0' : bigNum1.times(bigNum2).div(100).toString();
  }
  if (operation === '÷') {
    return bigNum1.div(bigNum2).toString();
  }
  if (operation === 'X') {
    return bigNum1.times(bigNum2).toString();
  }
  if (operation === '-') {
    return bigNum1.minus(bigNum2).toString();
  }
  if (operation === '+') {
    return bigNum1.plus(bigNum2).toString();
  }

  return null;
})();

export default Operate;
