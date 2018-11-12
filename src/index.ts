export function round(value: number, decimalPlacesToRoundTo: number = 0) {
  const numberAsString = numberToString(value);
  const parts = numberAsString.split('.');
  const integerPart = parts[0];
  const decimalPart = parts[1] || '';

  if (decimalPart === '') {
    return value;
  }

  const integerDigits = ['0', ...integerPart.split('')];
  const decimalDigits = [...decimalPart.split(''), '0'];
  const allDigits = [...integerDigits, ...decimalDigits];

  const stopRoundingAtIndex = integerDigits.length - 1 + decimalPlacesToRoundTo;

  let carry = 0;
  for (let index = allDigits.length - 1; index > -1; index--) {
    const digit = parseInt(allDigits[index], 10);
    let newDigit: number;
    if (index > stopRoundingAtIndex) {
      newDigit = 0;
      carry = digit + carry >= 5 ? 1 : 0;
    } else {
      newDigit = (digit + carry) % 10;
      carry = digit + carry >= 10 ? 1 : 0;
    }
    allDigits[index] = newDigit.toString();
  }

  allDigits.splice(integerDigits.length, 0, '.');

  const result = parseFloat(allDigits.join(''));

  return result;
}

// tslint:disable-next-line:max-line-length
// Sourced from: https://stackoverflow.com/questions/1685680/how-to-avoid-scientific-notation-for-large-numbers-in-javascript/46545519#46545519
export function numberToString(value: number) {
  let tempValue = value;
  let numStr = String(tempValue);

  if (Math.abs(tempValue) < 1.0) {
    const e = parseInt(tempValue.toString().split('e-')[1], 10);
    if (e) {
      const negative = tempValue < 0;
      if (negative) {
        tempValue *= -1;
      }
      tempValue *= Math.pow(10, e - 1);
      // tslint:disable-next-line:prefer-array-literal
      numStr = '0.' + (new Array(e)).join('0') + tempValue.toString().substring(2);
      if (negative) {
        numStr = '-' + numStr;
      }
    }
  } else {
    let e = parseInt(tempValue.toString().split('+')[1], 10);
    if (e > 20) {
      e -= 20;
      tempValue /= Math.pow(10, e);
      // tslint:disable-next-line:prefer-array-literal
      numStr = tempValue.toString() + (new Array(e + 1)).join('0');
    }
  }

  return numStr;
}
