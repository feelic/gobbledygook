import { Context, PoS } from "../interfaces";

export function makeNumber(context: Context, number: number): PoS {
  const { lang } = context;
  const numbersRules = lang.numbers;
  if (!numbersRules) {
    return { pos: "Num", form: String(number), meaning: String(number) };
  }

  if (numbersRules.digits[number]) {
    return {
      pos: "Num",
      form: numbersRules.digits[number],
      meaning: String(number),
    };
  }
  const placeNames = ["units", "tens", "hundreds", "thousands"];
  const breakdown = number.toString().split("").reverse();

  const bits: Record<string, string> = breakdown.reduce((prev, curr, idx) => {
    const placeName = placeNames[idx];

    const paddedNumber = curr + new Array(idx).fill(0).join("");
    const digit =
      numbersRules.digits[Number(paddedNumber)] ||
      numbersRules.digits[Number(curr)];

    return {
      ...prev,
      [placeName]: numbersRules.unitFormation[placeName].replace(
        "{digit}",
        digit
      ),
    };
  }, {});

  const formedNumber = placeNames.reduce((prev, curr) => {
    return prev.replace(`{${curr}}`, bits[curr] || "");
  }, numbersRules.formation);

  return { pos: "Num", form: formedNumber, meaning: String(number) };
}
