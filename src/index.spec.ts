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
  const testObject = { firstName: 'John', lastName: 'Smith', isActive: true };

  it('returns immutable data from object', () => {
    const result = parseJs(testObject);

    // const testing = Record({ isActive: true });

    // const value1 = new testing({ isActive: true });
    // const value2 = value1.set('isActive', true);

    const value1 = result.set('isActive', true);
    const value2 = result.set('isActive', false);

    result.testing = 1;

    console.log('MATCH', value1 === value2);

    // // const user = result.find((user) => user.isActive);

    // result.testing = true;

    // console.log(result);

    expect(result).toBeTruthy();
  });
});
