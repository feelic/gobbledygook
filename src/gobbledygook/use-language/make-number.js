export function makeNumber(context, number) {
  const testNumbers = [0, 1, 3, 12, 15, 18, 20, 21, 22, 32, 78, 100, 101, 104, 120, 121]

  console.log(testNumbers.map((item) => {
    return realMakeNumber (context, item)
  }));

}

function realMakeNumber (context, number) {
  const { lang } = context;
  const numbersRules = lang.numbers
  if (! numbersRules) {
    return number;
  }

  if (numbersRules.digits[number]) {
    return numbersRules.digits[number];
  }
  const placeNames = ['units', 'tens', 'hundreds', 'thousands'];
  const breakdown = number.toString().split('').reverse();


  const bits = breakdown.reduce((prev, curr, idx) => {
    const placeName = placeNames[idx];

    const paddedNumber = curr + new Array(idx).fill(0).join('');
    const digit = numbersRules.digits[paddedNumber] || numbersRules.digits[curr];

    return {
      ...prev,
      [placeName]: numbersRules.unitFormation[placeName].replace("{digit}", digit),
    };
  }, {});

  return placeNames.reduce((prev, curr)=> {
    return prev.replace(`{${curr}}`, bits[curr] || '');
  }, numbersRules.formation)
}