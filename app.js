// chapter 17-20  Arrays and loop
//Q.1
var num = [
    [ ],
    [ ],
    [ ],
    [ ]

]
console.log(num);
//Q.2
var metrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
var metrix$ = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
var result = [ ]

for(var i = 0 ; i < metrix.length; i++){
    result[i]= [ ]
   for(var j = 0 ; j< metrix[i].length; j++){
        var metrix_Add = metrix[i][j] + metrix$[i][j];
        result[i].push(metrix_Add)
    }
}
console.log(result);

//Q.3
for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}

//Q.4
let table  = parseInt(prompt('Enter your Table Number'))

let startingPoint = parseInt(prompt("Enter Number Starting point"));

let endingPoint = parseInt(prompt('Enter Number EndingPoint'))

for(var i = startingPoint ; i <= endingPoint ; i++)
{
    let result = table + " X " + i + " = " + i*table + "<br>";

    document.write(result);
}

// Q.5
let furits = ["apple","banana","mango","orange","strawberry"]

let add = furits.join("<br>")

document.write(add )
document.write("<br>"+ "<br>")
for(var i = 0; i < furits.length; i++){
    let output = "Element at index " + i + " is "+furits[i] + '<br>';
    document.write(output)
}

//Q.6
document.write("<h1>Counting :</h1>");

for(var i = 1 ; i <= 15 ; i++){
    document.write(i + " <b>,</b> ")
}

document.write("<h1>Reverse Counting :</h1>")

for(var i = 10; i >= 1 ; i--){
    document.write(i + " <b>,</b> ")
}

document.write("<h1>Even :</h1>")

for(var j = 0 ; j <=20 ; j+=2){
    document.write(j + " <b>,</b> ")
}

document.write("<h1>Odd :</h1>")

for(var j = 1 ; j <=20 ; j+=2){
    document.write(j + " <b>,</b> ")
}

document.write("<h1>Series :</h1>")

for(var j = 2 ; j <=20 ; j+=2){
    document.write(j +"k" + " <b>,</b> ")
}


//Q.7
let userInput = prompt("Welcome to ABC Backery. what do you want to order sir/ma'am?");

let bacKery = ["cake","apple" , "cookie","chips","patties"]

userInput = userInput.toLowerCase();

let result = [ ]

for(var i = 0 ; i < bacKery.length; i++){
    let currentItem = bacKery[i].toLowerCase();

    if(currentItem.includes(userInput)){
        result.push(bacKery[i])
    }
}
if(result.length > 0){
    console.log(userInput+ " is avilable at index in our Backery");
}else{
    console.log(userInput + " is not avilable");
}
