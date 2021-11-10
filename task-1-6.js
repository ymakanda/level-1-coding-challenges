/**
 Write a function that takes in an array/list of strings and then prints out the longest one

eg: longest(["the","quick","brown", "fox", "ate", "my", "chickens"])
should print : chickens
If there are multiple longest strings then print them all.
eg:longest(["once", "upon", "a", "time"])
should print:
once
upon
time
 */

function longest(strArr) {
  const maxArr = [];
  let tlength = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (tlength < strArr[i].length) {
      tlength = strArr[i].length;
    }
  }
  for (let j = 0; j < strArr.length; j++) {
    if (strArr[j].length === tlength) {
      maxArr.push(strArr[j]);
    }
  }
  if (maxArr.length === 1) {
    console.log(maxArr[0]);
  } else {
    console.log(maxArr.join('\r\n'));
  }
}
longest(['once', 'upon', 'a', 'time']);
