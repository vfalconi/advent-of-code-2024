export default (a, b) => {
  const difference = a - b;

  if (difference > 0) {
    return 1;
  }

  if (difference < 0) {
    return -1;
  }

  return difference;
};
