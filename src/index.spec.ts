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

    const testing = Record({ isActive: true });

    const smoosh: any = { hello: true };
    const value: any = new testing(smoosh);

    value.set('goodbye', true);

    console.log('VALUE', value);

    // // const user = result.find((user) => user.isActive);

    // result.testing = true;

    // console.log(result);

    expect(result).toBeTruthy();
  });
});
