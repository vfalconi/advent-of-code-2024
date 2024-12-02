export default (input) => {
  const { left, right } = { ...input };
  const lFrequencies = new Map();
  const rFrequencies = new Map();
  let similarityScore = 0;

  for (let i = 0; i < left.length; i++) {
    let rCount = rFrequencies.get(right[i]) || 0;
    let lCount = lFrequencies.get(left[i]) || 0;

    rCount++;
    lCount++;

    rFrequencies.set(right[i], rCount);
    lFrequencies.set(left[i], lCount);
  }

  Array.from(lFrequencies.keys()).forEach((lFNum) => {
    // how often each left hand number occurs in right list
    const p = rFrequencies.get(lFNum);
    // how often each left hand number occurs in left list
    const q = lFrequencies.get(lFNum);

    if (p && q) {
      similarityScore += lFNum * p * q;
    }
  });

  return similarityScore;
};
