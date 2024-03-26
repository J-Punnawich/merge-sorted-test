# merge-sorted-test

## About <a name = "about"></a>

This project Merge Sort function for sorting an array of integers and unit tests written with Jest

## Getting Started <a name = "getting_started"></a>

### Installing

Run ```npm install``` to install the required dependencies (Jest)

```Bash

npm install

```
### Usage <a name = "usage"></a>

The ```merge.ts``` file contains the Merge function. Example as follows:

```typescript

import { merge } from "./merge";

const collection1 = [1, 5, 7];
const collection2 = [6, 4, 2];
const collection3 = [3, 8, 9];

const sortedArray = merge(collection1, collection2, collection3)

console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

```

### Testing <a name = "test"></a>

The ```merge.test.ts``` file contains Jest unit tests for the ```merge.ts``` function. To run the tests:

```Bash

npm test

```

This will execute the Jest tests and report any failures
