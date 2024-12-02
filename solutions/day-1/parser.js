export default (lines) => {
  const left = [];
  const right = [];

  lines.forEach((line) => {
    const [l, r] = line.split('   ');
    left.push(parseInt(l, 10));
    right.push(parseInt(r, 10));
  });

  return { left, right };
};
