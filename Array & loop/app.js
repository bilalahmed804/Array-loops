let input = [1,2,3,4,5,6,7,8,9,10]

document.write(input + "<br>");
for(var i = 0 ; i < input.length; i++){
   if(input[i] % 3 === 0 && input[i] % 5 === 0){
    input[i] = "ThreeFive";
   }else if(input[i] % 3 === 0){
    input[i] = "Three";
   }else if(input[i] % 5 === 0){
    input[i] = "Five";
   }
}

document.write("Modified element of the list" + "<br>");
for(var i = 0 ; i < input.length; i++){
    document.write(input[i]+ ' <b>,</b> ');
}


