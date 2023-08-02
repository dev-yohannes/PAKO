var restaurant_name = document.querySelector("#title");
var desc = document.querySelector(".discription");
var body = document.querySelector("body");

desc.innerHTML = "A <i>place</i> to eat";
restaurant_name.innerHTML = "<h1>PAKO</h1>";

var ul = document.createElement("ul");
body.appendChild(ul);

for (var i = 0; i < 10; i++) {
  var li = document.createElement("li");
  li.innerHTML = "hello there number" + i;
  ul.appendChild(li);
}

var newestdiv = document.createElement("div");
newestdiv.innerHTML = "abc";
restaurant_name.appendChild(newestdiv);
