// Switch Statement exmaple
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

// How to write Switch Statement in angularJS Controller?
var vm = this;
vm.SwitchFuction = function (id, caseStr) {
      switch (caseStr) {
          case '1':
              alert("Selected Case Number is 1");
              break;
          case '2':
              alert("Selected Case Number is 2");
              break;
          default:

      }
  };

// Conditional Statement example
function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
	}
}
console.log(lessThanOrEqualToZero(4));
console.log(lessThanOrEqualToZero(-1));

// a function to store the if/else statement
  vm.aftermath = function(){
    // if heroNum is greater than the users number
    if (vm.bradyNum >= vm.sad) {
      // then print out this string
      vm.thing = ('No High Five for Tommy Boy!!!');
      console.log('Sad Tom!', vm.object);
      vm.completed= complete++;
      // return ('Saitama Wins!');
    }
    // other wise
    else if (vm.sad >= vm.bradyNum) {
      // then print out this string
      vm.thing = ('A HIGH FIVE!!!');
    }
  };
