import { Seq, Record, List } from 'immutable';

/* -----------------------------------
 *
 * Overloads
 *
 * -------------------------------- */

function parseJs<T extends object>(data: T[]): List<Record<T> & Readonly<T>>;
function parseJs<K, T extends object>(data: Map<K, T>): List<Record<T> & Readonly<T>>;
function parseJs<T extends object>(data: T): Record<T> & Readonly<T>;

/* -----------------------------------
 *
 * Parse
 *
 * -------------------------------- */

function parseJs<T extends object>(data: T) {
  if (typeof data !== 'object' || data === null) {
    return data;
  }

  if (Array.isArray(data) || data instanceof Map) {
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
