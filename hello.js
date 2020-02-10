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


///////////////////////////////////////////
function printLine(size, char){
    let line = "";
    for(i=0; i<size; i++)
        line += char;
    console.log(line);
}