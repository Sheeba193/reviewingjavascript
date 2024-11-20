//stands for Not a Number

var a = "7";
var b = 6;

console.log(a * b);


var c = "apple";
var d = 10;

if (isNaN(c)){
    console.log("that is not a number");
    document.write("that i snot anumber");
    alert("enter a valid number!");
}else{
    console.log("meaning of life is " + (c * d));
}

//double negative

if (!isNaN(c)){
    console.log("that is not a number");
    document.write("that i snot anumber");
    alert("enter a valid number!");
}else{
    console.log("meaning of life is " + (c * d));
}

