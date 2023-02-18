const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpeg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpeg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpeg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpeg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpeg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpeg"
    }    
};

//cart
var cart = []

//gets the params from the URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

//updates heading based on params
var heading = document.querySelector('#headingText')
heading.innerHTML = rollType + " Cinnamon Roll"

//updates image based on params
document.querySelector('#productImage').src = "./products/" + rolls[rollType].imageFile


//gets the p tag that displays the price
let price = document.querySelector('#totalPrice')
price.innerHTML = '$' + rolls[rollType].basePrice


//on change function that changes the displayed total price based on selected glazing value
function glazingChange(element){
    const priceChange = element.value
    const size = document.querySelector('#size').value
    price.innerHTML = '$' + ((rolls[rollType].basePrice + allGlazes[priceChange].price) * packSize[size].multiplier).toFixed(2)
}

//on change function that changes the displayed total price based on selected size value
function sizeChange(element){
    const sizeChange = element.value
    const glazing = document.querySelector('#glazing').value
    price.innerHTML = '$' + ((rolls[rollType].basePrice + allGlazes[glazing].price) * packSize[sizeChange].multiplier).toFixed(2)
}

//class Roll for keeping info in cart
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//adds to cart
function addToCart(){
    const glazing = document.querySelector('#glazing')
    const glazingText = glazing.options[glazing.value].text

    const size = document.querySelector('#size')
    const sizeText = size.options[size.value].text

    const basePrice = rolls[rollType].basePrice
    
    const saved = new Roll(rollType, glazingText, sizeText, basePrice)
    
    cart.push(saved)
    console.log(cart)
}


