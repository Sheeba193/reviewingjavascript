// complex abstract word
//whaterver object currently owns that object that you are using the keyword in




var myCar2 = {
    maxSpeed: 65, 
    driver: "Sarah", 
    drive: function(speed, time ){
        console.log(speed * time);    
    },

    test: function(){
        console.log(this);
    }
};

var myCar3 = {
    maxSpeed: 7, 
    driver: "Sarah", 
    drive: function(speed, time ){
        console.log(speed * time);    
    },

    test: function(){
        console.log(this);
    }
};


var myCar4 = {
    maxSpeed: 35, 
    driver: "Sebastian", 
    drive: function(speed, time ){
        console.log(speed * time);    
    },

    logDriver: function(){
        console.log("my driver name is " + this.driver);
    }
};



myCar4.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);