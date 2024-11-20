document.getElementsByClassName("servicing-container");

title.setAttribute("style", "position: relative; left 20px;");

var title = document.getAnimations("h1")

 ///adding elements to html
var menu = document.getElementById("quicklinks").getElementsByTagName("ul")[0];
menu.appendChild(newLi);
<li>​…​</li>​
 
 

newLi.appendChild(newA);


newA.innerHTML = "Blogs";

menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);
<li>​…​</li>​


//removing elements from the DOM
var parent = document.getElementById("quicklinks").getElementsByTagName("ul")[0];

var child = parent.getElementsByTagName("li")[0];

var removed = parent.removeChild(child);

//restores removed elements
parent.appendChild(removed);
<li>​…​</li>​
