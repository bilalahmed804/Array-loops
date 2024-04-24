//Q.1 Ek list of integers lein aur sirf even numbers ko filter karke ek nayi list generate karein.

let numberList = [15, 6, 7, 10, 30, 9, 25, 12, 45];

let evenNumber = numberList.filter(numberList => numberList % 2 === 0)

console.log(evenNumber);

//Q.2 Ek string input lein aur uska reverse print karein
let string1 = ["The"," quick", "brown", "fox"]
console.log(string1.reverse());

//Q.3
let num_$ = prompt("Enter prime number")

for(var i = 2; i < num_$.length; i++){
    if(num_$ <= 1){
        console.log(num_$ + " is not a prime number");
    }
    else if(num_$ % 2 === 0 || num_$ % 3 === 0){
        console.log(" is a prime number");
    }else{
        console.log(" is not a prime number");
    }
}

