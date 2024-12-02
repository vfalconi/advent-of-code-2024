export default (input) => {
  let { left, right } = { ...input };
  let distances = [];

  left.sort();
  right.sort();

  left.forEach((location, i) => {
    distances.push(Math.abs(location - right[i]));
  });

  return distances.reduce((p, q) => {
    return p + q;
  });
};
