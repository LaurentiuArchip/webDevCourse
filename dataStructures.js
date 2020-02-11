console.log(sum(range(1, 10)));
console.log(range(1, 10));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(10, 1, -1)));

console.log(arrayToList([10,20, 30, 40]));

let empty = {};
console.log(empty.toString);
console.log(empty.toString());
// console.log(Object.prototype.value);


////////////////////////////////////////

function sum(numbers) {
    let total = 0;
    for(let n of numbers)
        total += n;

    return total;
}

function range(start, endValue, step) {
    console.log(step);
    if(step === undefined) { //step === null
        console.log(step);
        step = 1;
    }
    let range = [];
    for(let i = start; i <= endValue; i += step)
        range.push(i);
    
    return range;
}

function arrayToList(numbers){
    let list = {};
    list.value = numbers[numbers.length -1];
    for(let i = numbers.length-2; i>=0; i-- ){
        list.rest = list;
        list.value = numbers[i];
    }

    return list;
}

///////////////////////