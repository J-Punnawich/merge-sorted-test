export function merge(
  arr1: number[],
  arr2: number[],
  arr3: number[]
): number[] {
  const mergedList: number[] = arr1.concat(arr2).concat(arr3);

  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < mergedList.length; i += 1) {
      if (mergedList[i - 1] > mergedList[i]) {
        done = false;
        var tmp = mergedList[i - 1];
        mergedList[i - 1] = mergedList[i];
        mergedList[i] = tmp;
      }
    }
  }

  return mergedList;
}
