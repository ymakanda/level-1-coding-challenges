/**
 Write a function, name it square. It takes in an integer and then prints
 out a square using the hash character.

eg square(2) should print
##
##
eg square(4) should print

####
####
####
####
 */

function square(num) {
  var squareArray = [];
  var result;
  for (var i = 0; i < num; i++) {
      result = "";
    for (var j = 0; j < num; j++) {
        result += "#";
    }
    console.log(result);
  }
}
square(4);