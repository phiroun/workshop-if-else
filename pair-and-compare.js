//Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.

const param1A = 0;
const param1B = false;
const param2A = "horse";
const param2B = "horse";
if (param1A === param1B || param2A === param2B){
    console.log("true");
} else if (param1A !== param1B || param2A !== param2B){
    console.log("false");
}