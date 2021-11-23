import { Record } from 'immutable';

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
  const testData = { userId: 1, firstName: 'John', lastName: 'Smith' };
  const testArray = Array(10).map((_, index) => ({ ...testData, userId: index }));

  it('returns Record from object', () => {
    const result = parseJs(testData);

    expect(result.get('firstName')).toEqual(testData.firstName);
    expect(result.firstName).toEqual(testData.firstName);
  });

  it('returns List<Record> from array of objects', () => {
    const result = parseJs(testArray);

    console.log(result);

    expect(result.length).toEqual(testArray.length);
  });
});
