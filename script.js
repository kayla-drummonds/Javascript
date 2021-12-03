console.log(4 + 5);

console.log("3" == 3)
console.log("3" === 3)
        

console.log((2 >= 2 && 10 % 3 == 1) || ((10 < 11 && 2 != 3) || 2 == 12))
console.log((5 <= 3 || 6 > 0) && (20 % 3 == 2 && 88 / 2 > 30))

var myNumber = "A";
if (myNumber == 0) {
    console.log(myNumber + " is equal to 0");
} else if (myNumber > 0) {
    console.log(myNumber + " is a positive number");
} else if (myNumber < 0) {
    console.log(myNumber + " is a negative number");
} else {
    console.log(myNumber + " is not a number");
}

console.log("Hello" + " World");
console.log("This is a String" + " added to a second one");
console.log(`Hello World`);

var x=5, y=4;
var operand="*";
switch(operand) {
    case "+":
        console.log(x+y);
        break;
    case "-":
        console.log(x-y);
        break;
    case "*":
        console.log(x*y);
        break;
    case "/":
        console.log(x/y);
        break;
    default:
        console.log("Invalid Operand");
}

var rate = 5, initial_balance = 10000;
var target = 2 * initial_balance;
var balance = initial_balance;
var year = 0;
while(balance < target) {
    var interest = balance * rate / 100;
    balance = balance + interest;
    year++;
}
console.log("The investment doubled after " + year + " years.");

var i = 5
while (i>0) {
    console.log(i + " ");
    i--;
}

for (var index = 0; index <= 10; index++) {
    console.log(index);
}

for (var j = 0; j <= 5; j++) {
    console.log(j);
}

for (var k = 5; k >= 0; k--) {
    console.log(k);
}

for (var l = 0; l < 9; l += 2) {
    console.log(l);
}

for (var m = 1; m <= 20; m = m*2) {
    console.log(m);
}

var inte = 4;
do {
    console.log("Printing");
}
while (inte < 3);

var n = 1;
do {
    let value = n * 2;
    n++;
    console.log(value);
}
while (n <= 5);