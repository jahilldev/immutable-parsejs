import { Seq, Record } from 'immutable';

/* -----------------------------------
 *
 * IObject
 *
 * -------------------------------- */

interface IObject {
  [key: string]: unknown;
}

/* -----------------------------------
 *
 * Types
 *
 * -------------------------------- */

type IValue = IObject | IObject[];
type IData = IObject | IObject[] | undefined;

/* -----------------------------------
 *
 * Parse
 *
 * -------------------------------- */

function parseJs(value: IValue) {
  const data = getDataObject(value);

  if (!data) {
    return data;
  }

  if (Array.isArray(data)) {
    return Seq(data).map(parseJs).toList();
  }

  const record = Record(data);

  return new record(Seq(data).map(parseJs));
}

/* -----------------------------------
 *
 * getDataObject
 *
 * -------------------------------- */

function getDataObject(value: IValue): IData {
  let result: IObject | IObject[] | undefined;

  if (value === null) {
    return result;
  }

  if (typeof value === 'object') {
    result = value;
  }

  return result;
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { parseJs };
