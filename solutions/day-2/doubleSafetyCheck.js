import safetyCheck from './safetyCheck.js';

export default (report) => {
  const safe = safetyCheck(report);

  if (safe !== true) {
    for (let i = 0; i < report.length; i++) {
      const variation = [...report];

      variation.splice(i, 1);

      if (safetyCheck(variation) === true) {
        return true;
      }
    }
  }

  return safe;
};
