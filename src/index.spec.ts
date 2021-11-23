/* -----------------------------------
 *
 * Subject
 *
 * -------------------------------- */

import { parseJs } from './index';

/* -----------------------------------
 *
 * Parse
 *
 * -------------------------------- */

describe('parseJs()', () => {
  const testData = { userId: 1, firstName: 'John', lastName: 'Smith', categories: [{ id: 1 }] };
  const testArray = [1, 2].map((_, index) => ({ ...testData, userId: index }));

  it('returns Record from object', () => {
    const result = parseJs(testData);

    expect(result.get('firstName')).toEqual(testData.firstName);
    expect(result.firstName).toEqual(testData.firstName);
  });

  it('returns List<Record> from array of objects', () => {
    const result = parseJs(testArray);

    expect(result.size).toEqual(testArray.length);
  });
});
