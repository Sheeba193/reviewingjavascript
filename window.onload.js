///WINDOW ONLOAD EVENT
window.onload = function(){

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