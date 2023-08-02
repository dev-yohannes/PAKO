var restaurant_name = document.querySelector("#title");
var desc = document.querySelector(".discription");
var body = document.querySelector("body");
var foods = document.querySelector("#foods");

desc.innerHTML = "A <i>place</i> to eat";
restaurant_name.innerHTML = "<h1>PAKO</h1>";

var food_list = [
  "Changu fish",
  "Ugali",
  "Egusi soup",
  "Eba",
  "Misr wot",
  "Gomen",
];

for (var i = 0; i < food_list.length; i++) {
  var newoption = document.createElement("option");
  newoption.value = food_list[i];
  newoption.innerHTML = food_list[i];
  foods.appendChild(newoption);
}
