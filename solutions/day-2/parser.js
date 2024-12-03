export default (lines) => {
  return lines.map((line) => {
    return line.split(' ').map((p) => {
      return parseInt(p, 10);
    });
  });
};
