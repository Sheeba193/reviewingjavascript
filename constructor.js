//save time in creating many objects

var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    }
    this.logDriver = function(){
        console.log("my driver name is " + this.driver);
    }


} //start with caps

var myCar = new Car (50, "Sheba");
var myCar2 = new Car (30, "Shba");
var myCar3 = new Car (5, "Sha");
var myCar4 = new Car (87, "Shea");

myCar.drive(30 , 2);
myCar3.logDriver();

