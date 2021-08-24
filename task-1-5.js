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
  var result = "";
  if(num > 0) {
    for (var i = 0; i < num; i++) {
        result += "#";
        console.log(result);
    }
  }
  else{
    var num = Math.abs(num); 
    var result;
    for (var i = num; i >= 1; i--) {
      result = "";
      for (var j = i; j >=1; j--) {
        result += "#";
      }
      console.log(result);
    }
  }
}
triangle(4);