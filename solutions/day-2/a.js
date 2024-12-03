import safetyCheck from './safetyCheck.js';

export default (input) => {
  const reports = [...input];
  const safeReports = [];

  reports.forEach((report) => {
    if (safetyCheck(report)) {
      safeReports.push(report);
    }
  });

  return safeReports.length;
};
