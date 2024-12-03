import calculateDirection from './calculateDirection.js';

export default (report) => {
  const initialDirection = calculateDirection(report[0], report[1]);

  for (let i = 0; i < report.length - 1; i++) {
    const p = report[i];
    const q = report[i + 1];
    const difference = Math.abs(p - q);
    const direction = calculateDirection(p, q);

    if (initialDirection !== direction || difference < 1 || difference > 3) {
      return false;
    }
  }

  return true;
};
