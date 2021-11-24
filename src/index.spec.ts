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

  it('returns a Record from an object', () => {
    const result = parseJs(testData);

    expect(result.get('firstName')).toEqual(testData.firstName);
    expect(result.firstName).toEqual(testData.firstName);
  });

  it('returns a List<Record> from an array of objects', () => {
    const result = parseJs(testArray);
    const { userId } = result.get(-1);

    expect(result.size).toEqual(testArray.length);
    expect(userId).toEqual(testArray[testArray.length - 1].userId);
  });
});
