import { Record, List } from 'immutable';

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
  const testArray = [1, 2, 3].map((userId) => ({ ...testData, userId }));
  const testMap = new Map([[0, testData]]);

  it('returns argument value if invalid type', () => {
    const values = [null, void 0];
    const results = values.map((value) => parseJs(value));

    expect(results).toEqual(values);
  });

  it('returns a Record from an object', () => {
    const result = parseJs(testData);

    expect(result instanceof Record).toBe(true);
    expect(result.categories instanceof List).toBe(true);
    expect(result.get('firstName')).toEqual(testData.firstName);
    expect(result.firstName).toEqual(testData.firstName);
  });

  it('returns a List<Record> from an array of objects', () => {
    const result = parseJs(testArray);
    const { userId } = result.get(-1);

    expect(result instanceof List).toBe(true);
    expect(result.get(0) instanceof Record).toBe(true);
    expect(result.size).toEqual(testArray.length);
    expect(userId).toEqual(testArray[testArray.length - 1].userId);
  });

  it('returns a List<Record> from a Map of objects', () => {
    const result = parseJs(testMap);
    const { userId } = result.get(0);

    expect(result instanceof List).toBe(true);
    expect(result.get(0) instanceof Record).toBe(true);
    expect(result.size).toEqual(testMap.size);
    expect(userId).toEqual(testMap.get(0).userId);
  });
});
