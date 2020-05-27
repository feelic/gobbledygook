module.exports = {
  bindNumber: (n, min, max) => {
    if (n > max) {
      return max;
    }
    if (n < min) {
      return min;
    }
    return n;
  },
};
