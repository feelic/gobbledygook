import { Context, PoS } from "../interfaces";
import { PosCode } from "../constants/grammar";

export function makeNumber(context: Context, number: number): PoS {
  const { lang } = context;
  if (!lang.numbers) {
    return { pos: PosCode.Number, form: String(number), meaning: String(number) };
  }
  if (lang.numbers.digits[number]) {
    return {
      pos: PosCode.Number,
      form: lang.numbers.digits[number],
      meaning: String(number),
    };
  }

  const digits = number
    .toString()
    .split("")
    .map((digit) => parseInt(digit, 10));

  const formedNumber = digits.reduce((prev, digit, i) => {
    const unit = digits.length - i - 1;
    const digitMorpheme = lang.numbers.digits[digit];
    const unitMorpheme = lang.numbers.unitFormation[unit];

    if (digit === 0) {
      return prev;
    }

    return `${prev} ${lang.numbers.formation
      .replace("{digit}", digitMorpheme)
      .replace("{unit}", unitMorpheme || "")}`;
  }, "");

  return { pos: PosCode.Number, form: formedNumber, meaning: String(number) };
}
