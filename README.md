# immutable-parsejs

Sometimes when working with large data sets that come from an external source, think API, we need someway of converting that data into Immutable structures. This is useful, not only for type safety, but also for comparison checks and the improved performance they provide.

For more on why, check out Immutable's documentation:
https://immutable-js.com/

This package (**389 bytes** GZipped) exports a single function, `parseJs`, that can be used to wrap a nested data structure in Immutable objects, namely `List` and `Record`.

# Getting Started

Install with Yarn:

```bash
$ yarn add immutable-parsejs
```

Install with NPM:

```bash
$ npm i immutable-parsejs
```

# Using parseJs()

Once you have your data structure, either an object, or an array of objects, you can pass that into the `parseJs` function:

```typescript
import { parseJs } from 'immutable-parsejs';

const dataSet = [
  { userId: 1001, firstName: 'John' },
  { userId: 1002, firstName: 'Joe' },
];

const result = parseJs(dataSet); // <-- List<Record>;
const firstUser = result.get(0);

/*[...]*/

console.log(firstUser.get('firstName')); // <-- John
```

Now your data set is wrapped recursively, objects will now be `Record`'s, and arrays will be `List`'s.

# Known issues

When working with complex structures in TypeScript, getting nested types to work is tricky. Types are automatically infered, but they can only do so much. If you have an array of objects, that themselves have arrays, TypeScript will incorrectly infer the arrays within an object to be array primitives, not `List`'s. To get around this, I'd suggest that you define your data structure via an interface upfront (this is good practice, anyway).
