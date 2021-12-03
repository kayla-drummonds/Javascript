var userInput = "";
var operand = "";
var nums="";
const separator = "|";

userInput = prompt("Enter an Aritmetic Expression:");
console.log(userInput);

for (let i = 0; i < userInput.length; i++) {
    if(userInput[i] >= '0' && userInput[i] <= '9') {
        while (i < userInput.length && userInput[i] >= '0' && userInput[i] <= '9') {
            nums += userInput[i];
            i++;
        }
        nums += userInput[i] + separator;
        i--;
    } else if (userInput[i] == "+" || userInput[i] == "-" || userInput[i] == "^") {
        operand += userInput[i] + separator;
    }
}
console.log("numbers", nums);
console.log("operands",operand);