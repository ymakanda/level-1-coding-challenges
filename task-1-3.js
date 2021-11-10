/**
 Write a function that takes 2 numbers as input. If either of the
 numbers is 65, OR if the sum of the numbers is 65 then return true.
 Otherwise return false.

 */
function checkTwoNumbersUsingOR(num1, num2) {
  return ((num1 === 65 || num2 === 65) || (num1 + num2 === 65));
}
checkTwoNumbersUsingOR(65, 0);
