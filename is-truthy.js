//using if/else statements, create a js code in a script that follows the following rules:
//if the value is truthy, print true
//if the value is falsy, print the corresponding result:
    //the boolean value false is falsy
    //the null value is falsy
    //underfined is falsy
    //the number 0 is falsy (the only falsy number)
    //the empty string is falsy (the only falsy string)

const iamastring = "I am a string";
if (iamastring === "I am a string"){
    console.log("true");
} else if (iamastring === false){
    console.log("the boolean value false is falsy");
} else if (iamastring === null){
    console.log("the null value is falsy");
} else if (iamastring === undefined){
    console.log("underfined is falsy");
} else if (iamastring === 0){
    console.log("the number 0 is falsy");
} else if (iamastring === ""){
    console.log("the empty sting is falsy");
} else {
    console.log("nothing is truthy")
}