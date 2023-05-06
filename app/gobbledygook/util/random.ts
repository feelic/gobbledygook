import seedrandom, { PRNG } from "seedrandom";

let randomNumberGenerator: PRNG | Function = () => {
  throw new Error("you must set a seed before running random");
};
export const random = () => randomNumberGenerator();

export const setSeed = function setSeed(seed: string) {
  randomNumberGenerator = seedrandom(seed);
};

// This function was found here http://stackoverflow.com/a/35599181
export const gaussian = function gaussian(
  mean: number,
  stdev: number,
  integer = true
) {
  let y2: number;
  let useLast = false;

  return function g() {
    let y1;

    if (useLast) {
      y1 = y2;
      useLast = false;
    } else {
      let x1;
      let x2;
      let w;

      do {
        x1 = 2.0 * random() - 1.0;
        x2 = 2.0 * random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      y1 = x1 * w;
      y2 = x2 * w;
      useLast = true;
    }

    let retval = mean + stdev * y1;

    if (integer) {
      retval = Math.round(retval);
    }

    return Math.abs(retval);
  };
};

export const randomWithCoef = function randomWithCoef(
  values: Record<string, { weight: number }>
) {
  const pool = Object.keys(values).reduce((prev: Array<any>, value) => {
    const { weight } = values[value];

    return prev.concat(new Array(weight).fill(value));
  }, []);

  return pool[Math.floor(random() * pool.length)];
};

export const nRandomFromArray = function nRandomFromArray(
  arr: Array<any>,
  n: number
) {
  const max = n > arr.length ? arr.length : n;
  const result = [];
  let pool = JSON.parse(JSON.stringify(arr));

  while (result.length < max) {
    const index = Math.floor(random() * pool.length);
    const elt = pool[index];

    pool = [...pool.slice(0, index), ...pool.slice(index + 1)];
    result.push(elt);
  }

  return result;
};

export const randomFromArray = function randomFromArray(arr: Array<any>) {
  return arr[Math.floor(random() * arr.length)];
};

export const shuffleArray = function shuffleArray(arr: Array<any>) {
  return arr.sort(() => Number(Math.round(random())));
};
