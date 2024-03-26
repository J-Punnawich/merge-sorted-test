import { merge } from "../src/merge";

describe("merge function", () => {
  it("should merge sorted collections", () => {
    const collection1 = [1, 5, 7];
    const collection2 = [6, 4, 0]; // sort max to min(0)
    const collection3 = [3, 8, 9];

    const expected = [0, 1, 3, 4, 5, 6, 7, 8, 9];

    expect(merge(collection1, collection2, collection3)).toEqual(
      expected
    );
  });

  it("should handle duplicate", () => {
    const collection1: number[] = [1, 1, 3];
    const collection2: number[] = [6, 4, 4];
    const collection3: number[] = [2, 2, 8];
    const expected: number[] = [1, 1, 2, 2, 3, 4, 4, 6, 8];

    expect(merge(collection1, collection2, collection3)).toEqual(
      expected
    );
  });

  it("should handle empty collections ", () => {
    const collection1: number[] = [];
    const collection2: number[] = [2];
    const collection3: number[] = [8];
    const expected: number[] = [2, 8];
    
    expect(merge(collection1, collection2, collection3)).toEqual(
      expected
    );
  });

});
