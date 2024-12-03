import doubleSafetyCheck from './doubleSafetyCheck.js';

export default (input) => {
  const reports = [...input];
  const safeReports = [];

  reports.forEach((report) => {
    if (doubleSafetyCheck(report)) {
      safeReports.push(report);
    }
  });

  return safeReports.length;
};
