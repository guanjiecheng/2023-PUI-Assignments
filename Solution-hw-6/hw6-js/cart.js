//hard coding values for base prices and image files
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

//Hard codes values for glazing
const glazes = {
    "Keep Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5
}

//hardcodes values for pack size
const packSize = {
    '1':1,
    '3':3,
    '6':5,
    '12':10
}

//creates class for roll
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}


function cartExists(){
    var cart = new Set()
    const savedCart = localStorage.getItem('storedCart')
    if( savedCart == null){
        return cart
    }
    else{
        const cartArray = JSON.parse(savedCart);
        for(const elem of cartArray){
            let item = new Roll(elem.type, elem.glazing, elem.size, elem.basePrice)
            cart.add(item)
        }
        return cart
    }
}

//creates a cart
var cart = cartExists()

//variable to hold cart price
var cartPrice = 0;

//displaying a element from cart to the page
function createElement(roll){
    //gets template
    const template = document.querySelector('#productTemplate');
    const clone = template.content.cloneNode(true)

    roll.element = clone.querySelector('.productWrapper')
    const buttonDelete = roll.element.querySelector('.remove')
    //adds the delete product to the remove element
    buttonDelete.addEventListener('click', () =>{
        deleteProduct(roll)
    })

    //adds template to the all products div
    var allProducts = document.querySelector('#allProducts')
    allProducts.prepend(roll.element)
    
    //updates the template
    updateElement(roll)
}

//updates the template
function updateElement(roll){
    const productImage = roll.element.querySelector(".productImage")
    const productName = roll.element.querySelector(".productName")
    const productGlaze = roll.element.querySelector(".productGlaze")
    const productSize = roll.element.querySelector(".productSize")
    const totalPrice = roll.element.querySelector(".productPrice")
    
    productImage.src = "./products/" + rolls[roll.type].imageFile
    productName.innerHTML = roll.type + " Cinnamon Roll"
    productGlaze.innerHTML = "Glazing: " + roll.glazing
    productSize.innerHTML = "Pack Size: " + roll.size
    totalPrice.innerHTML = "$" + ((roll.basePrice + glazes[roll.glazing]) * packSize[roll.size]).toFixed(2)

    //updates the total price
    cartPrice = (parseFloat(cartPrice) + parseFloat(((roll.basePrice + glazes[roll.glazing]) * packSize[roll.size]).toFixed(2))).toFixed(2)
    updateCartTotal()
}

//deletes a product
function deleteProduct(roll){
    if(cart.size != 0){
        cartPrice = (cartPrice - parseFloat(((roll.basePrice + glazes[roll.glazing]) * packSize[roll.size]).toFixed(2))).toFixed(2)
        roll.element.remove();
        cart.delete(roll)
        updateCartTotal()
        saveToLocalStorage()
    }
}

//updates the price displayed
function updateCartTotal(){
    const cartTotal = document.querySelector('#cartPrice')
    cartTotal.innerHTML = "$" +cartPrice 
}


function saveToLocalStorage(){
    const cartArray = Array.from(cart)
    const cartArrayString = JSON.stringify(cartArray)
    localStorage.setItem('storedCart',cartArrayString)
    console.log(localStorage.getItem('storedCart'))
}



//for each element in the cart add to page
for(const roll of cart){
    createElement(roll)
}




