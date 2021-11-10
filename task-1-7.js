/**
 Write a function that combines two lists by taking alternate elements and
  returns the result. You can assume the lists are of equal size.

If your function can work with lists of unequal size, we’ll think you’re cool.

eg combine([11,22,33], [1,2,3]) should return

[11,1,22,2,33,3]

 */

function combine(arr1, arr2) {
  const combinedList = [];
  for (let i = 0; i < arr1.length; i++) {
    combinedList.push(arr1[i]);
    combinedList.push(arr2[i]);
  }
  return combinedList;
}
combine([11, 22, 33], [1, 2, 3]);
