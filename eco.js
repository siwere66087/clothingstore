//cart

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//open cart
cartIcon.onclick =()=>{
cart.classList.add("active")

};
//close cart
closeCart.onclick =()=>{
 cart.classList.remove("active")
 
 };
//cart working js
if (document.readyState == "loading"){
document.addEventListener("DOMContentLoaded" ,ready );
}
else{
ready();
}
//making function
function ready(){
//remove items from cart
var removeCartButtons = document.getElementsByClassName('cart-remove')
console.log(removeCartButtons)
for (var i = 0; i < removeCartButtons.length; i++){
var button = removeCartButtons[i]
button.addEventListener ('click' ,removeCartItem)
}

}
//remove items from cart
function removeCartItem(event){
var buttonClicked = event.target;
 buttonClicked.parentElement.remove();

}
//update total
function updateTotal(){
var cartContent = document.getElementsByClassName('cart-content')[0]
var cartBoxes = document.getElementsByClassName('cart-box')
for (var i = 0; i < cartBoxes.length; i++){
var cartBoxe = cartBoxes [i]

}
}





