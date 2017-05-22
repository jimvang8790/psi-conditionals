// Switch Statement
var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  // Add your code here!
  default:
    console.log("That's not a candy!");
}

// Conditional Statement
function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
	}
}

console.log(lessThanOrEqualToZero(4));
console.log(lessThanOrEqualToZero(-1));
