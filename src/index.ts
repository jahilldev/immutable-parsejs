import { Seq, Record, List } from 'immutable';

/* -----------------------------------
 *
 * Overloads
 *
 * -------------------------------- */

function parseJs<T extends object>(data: T[]): List<Record<T> & Readonly<T>>;
function parseJs<T extends object>(data: T): Record<T> & Readonly<T>;

/* -----------------------------------
 *
 * Parse
 *
 * -------------------------------- */

function parseJs<T extends object>(data: T) {
  if (!data) {
    return void 0;
  }

  if (typeof data !== 'object') {
    return data;
  }

  if (Array.isArray(data)) {
    return Seq<any>(data).map(parseJs).toList();
  }

  const Factory = Record(data);

  return new Factory(Seq<any>(data).map(parseJs));
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { parseJs };
