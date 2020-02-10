console.log("Hello");
console.log(typeof 4.5);
let ten = 10;
console.log(ten*ten);
console.log("The value of ten is", ten);
console.log(Math.max(1,2,3,4,5));
// let age = Number(window.prompt("type in a number"));

// display a chess board exercise
let char1 = " ", char2 = "#";
let size = 8;
printLine(size+2, "_");
for(i=0; i<size; i++){
    let row = "|";
    for(j=0; j<size; j++){
        if(j%2 ==0){
            row += char1;
        }
        else{
            row += char2;
        }
    }
    temp = char1;
    char1=char2;
    char2 = temp;
    row += "|";
    console.log(row);
}
printLine(size+2, "-");

// closure example
/*
multiplier uses two variables, but only one is passed => 
??????????
*/
let twice = multiplier(4);
console.log(twice);
console.log(multiplier(3));
console.log(twice(5));

// recursion example
console.log(power(2 ,3)); 
/*
= 2 * power(2,2)
= 2 * 2 * power (2,1)
= 2 * 2 * 2 * power (2,0)
= 2 * 2 * 2 * 1
= 8
*/

// on template literals
let word1 = "farm";
console.log(`This is a ${word1} on a hill`); // use template literals, with backticks

// bean counting exercise
console.log(`The number of \"t\" is ${countChar("this team is the team", "t")}`);


///////////////////////////////////////////
function printLine(size, char) {
    let line = "";
    for(i=0; i<size; i++)
        line += char;
    console.log(line);
}

function multiplier(factor) {
    return number => number * factor;
}

function power(base, exponent) {
    if(exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

function zeroPad(number, width){
    let string = String(number);
    while(string.length < width){
        string = "0" + string;
    }
    return string;
}

function countChar(aString, aChar){
    let count = 0;
    for(i=0; i<aString.length; i++){
        if(aString[i] == aChar)
            count++;
    }
    return count;
}