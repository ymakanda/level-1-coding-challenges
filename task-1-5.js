/**
    eg triangle(2) should print
#
##
eg triangle(4) should print
#
##
###
####
If negative numbers are input then the triangle should be upside down
eg triangle(-2) should print

##
#
eg triangle(-4) should print
####
###
##
#
 */

function triangle(num) {
  let result = '';
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      result += '#';
      console.log(result);
    }
  } else {
    const numValue = Math.abs(num);
    for (let i = numValue; i >= 1; i--) {
      result = '';
      for (let j = i; j >= 1; j--) {
        result += '#';
      }
      console.log(result);
    }
  }
}
triangle(4);
