import { readFileSync } from 'node:fs';

export default (filepath) => {
  const p = readFileSync(filepath, { encoding: 'utf8' }).split('\n');
  // cut the last line of the file
  return p.slice(0, p.length - 1);
};
