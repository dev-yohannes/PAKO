var restaurant_name = document.querySelector("#title");
var desc = document.querySelector(".discription");
var foods = document.querySelector("#foods");
var add_to_cart = document.querySelector("#add_to_cart");
var checkout = document.querySelector("#checkout");
var body = document.querySelector("body");
var dom_total = document.querySelector("#dom_total");

var total = 0;
var total_items = 0;

add_to_cart.classList.add("hidden");

desc.innerHTML = "A <i>place</i> to eat";
restaurant_name.innerHTML = "<h1>PAKO</h1>";

var food_list = [
  { name: "Changu fish", price: 5.0 },
  { name: "Ugali", price: 2.0 },
  { name: "Egusi soup", price: 5.0 },
  { name: "Eba", price: 2.0 },
  { name: "Misr wot", price: 4.0 },
  { name: "Gomen", price: 4.5 },
];

for (var i = 0; i < food_list.length; i++) {
  var newoption = document.createElement("option");
  newoption.value = food_list[i].price;
  newoption.innerHTML = food_list[i].name;
  foods.appendChild(newoption);
}

user_selection = { value: null, text: null };

foods.addEventListener("change", function () {
  var selected_item = document.querySelector("#foods option:checked");
  user_selection.value = selected_item.value;
  user_selection.text = selected_item.text;

  var display_text = document.querySelector("#user_selected_text");
  var display_value = document.querySelector("#user_selected_value");
  var notification = document.querySelector("#notification");

  if (Number(user_selection.value) > 0) {
    notification.innerHTML = "You have selected: ";
    display_text.innerHTML = user_selection.text;
    display_value.innerHTML = Number(user_selection.value).toFixed(2);
    add_to_cart.classList.remove("hidden");
    add_to_cart.classList.add("green");
  } else {
    notification.innerHTML = "";
    display_text.innerHTML = null;
    display_value.innerHTML = null;
    add_to_cart.classList.add("hidden");
  }
});

add_to_cart.addEventListener("click", function () {
  if (total_items < 4) {
    var checkoutitem = document.createElement("div");
    checkoutitem.innerHTML =
      user_selection.text + " " + Number(user_selection.value).toFixed(2);
    checkout.appendChild(checkoutitem);
    total_items++;
    total += Number(user_selection.value);

    dom_total.innerHTML = total.toFixed(2);
  } else {
    alert("We apologize but you have exceded the maximum order.");
  }
});
