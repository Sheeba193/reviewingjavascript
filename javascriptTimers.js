// var myMessage = document.getElementById("message");

// function showMessage(){

//     myMessage.className = "show";
// }
// setTimeout(showMessage, 3000); ///shows after 3 seconds


 var colorChanger = document.document.getElementById("color-changer");

 var colors = ["red", "blue", "yellow", "pink"];
 var counter = 0;

 function changeColor(){

    if (counter >= colors.length){
        colorChanger.style.background = colors[counter];
        counter++;
    }
    var  myTimer = setInterval(changeColor, 3000);

    colorChanger.onclick = function (){
        clearInterval(myTimer);
        colorChanger.innerHtml = "Timer stopped";
    }
 
    
 }



    //USING ADD EVENTLISTENER
document.addEventListener("DOMContentLoaded", () => {
    var colorChanger = document.getElementById("color-changer");

    var colors = ["red", "blue", "yellow", "pink"];
    var counter = 0;

    function changeColor() {
        colorChanger.style.background = colors[counter];
        counter = (counter + 1) % colors.length; // Reset counter when it exceeds array length
    }

    setInterval(changeColor, 3000);
});

