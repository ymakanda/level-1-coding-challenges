/**
 Write a function that combines two lists by taking alternate elements and
  returns the result. You can assume the lists are of equal size.

If your function can work with lists of unequal size, we’ll think you’re cool.

eg combine([11,22,33], [1,2,3]) should return

[11,1,22,2,33,3]

 */

function combine(arr1,arr2){
  var l1 = arr1.length;
  var l2 =arr2.length;

  var l3 = l1 + l2;
  var arr3 = [l1+l2];

  var i = 0; var j = 0; var k = 0;
  var m = 0; var r = 0;

  var combineArr = [];
  l1 < l2 ? r = l1 : r = l2;

  while(m < r)
  {
    arr3[k++] = arr1[i++];
    arr3[k++] = arr2[j++];
    m++;
  }
  while(k < l3)
  {
    l1 < l2 ? arr3[k++] = arr2[j++] : arr3[k++] = arr1[i++];
  }

  for(var n = 0; n < l3; n++)
  {
    combineArr.push(arr3[n]);
  }
  return combineArr;
}
combine([11,22,33], [1,2,3]);