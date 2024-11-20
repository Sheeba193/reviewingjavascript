function setUpEvents(){ ///used when you have a large html file  

    var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function (){

    if (content.className == "open"){
        //shrink box
        content.className = "";
        button.innerHTML = "SHOW MORE";
    }else{
        //expand box
        content.className = "open";
        button.innerHTML = "SHOW LESS";
    }
};
}

window.onload = function(){

    setUpEvents();

}




