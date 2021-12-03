function add(a,b) {
    var c = a+b;
    return c;
}
var result = add(3,5);
console.log(result);

function printprops(p) {
    for(var o in p) {
        console.log(o + ": " + p[o] + "\n");
    }
}
var person = {
    first_name: "Luke",
    last_name: "Lance",
    age: 23
};
printprops(person);
