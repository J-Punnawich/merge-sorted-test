import { merge } from "../src/merge";

describe("merge function", () => {
  it("should merge three sorted collections correctly", () => {
    const collection1 = [1, 5, 7];
    const collection2 = [6, 4, 2];
    const collection3 = [3, 8, 9];

    const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(merge(collection1, collection2, collection3));
    expect(merge(collection1, collection2, collection3)).toEqual(
      expectedResult
    );
  });

  // it('should handle collections with duplicates', () => {
  //   const collection1 : number[] = [1, 1, 3];
  //   const collection2 : number[] = [];
  //   const collection3 : number[] = [2, 2, 8];
  //   const expectedResult : number[] = [-2, 0, 0, 1, 1, 2, 2, 3, 8];

  //   console.log(merge(collection1, collection2, collection3))

  //   expect(merge(collection1, collection2, collection3)).toEqual(expectedResult);
  // });

  it("should handle empty collections", () => {
    const collection1: number[] = [];
    const collection2: number[] = [2];
    const collection3: number[] = [8];
    const expectedResult: number[] = [2, 8];

    expect(merge(collection1, collection2, collection3)).toEqual(
      expectedResult
    );
  });
});
