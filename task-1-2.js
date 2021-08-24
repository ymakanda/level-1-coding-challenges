/**
 Write a function that takes 2 numbers as input. If either of the numbers 
 is 3 AND the sum of the numbers contains a 3 then return true. Otherwise 
 return false
 */

 function checkTwoNumbersUsingOrAnd(num1, num2) 
{
  var sumOfNums = num1 + num2;
  var containsThree = sumOfNums.toString().indexOf("3") > -1; //returns true if 3 is in the sum
  if ((num1 === 3 || num2 === 3) && containsThree) {
    return true;
  } else {
    return false;
  }
}
checkTwoNumbersUsingOrAnd(3,0);