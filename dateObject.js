var  myDate = new Date();

console.log(myDate);


var myBirthDate = new Date (2002, 2, 19);

console.log( myBirthDate);

var birthday = new Date (1967, 11, 14, 14, 12, 30);
var birthday2 = new Date (1967, 11, 14, 14, 12, 30);

console.log(birthday.getFullYear());
console.log(birthday.getTime());

if (birthday.getTime() == birthday2.getTime()){
    console.log("same birthday");
}else{
    console.log("different birthdays");
}