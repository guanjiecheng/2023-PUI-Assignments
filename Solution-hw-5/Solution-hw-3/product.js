//Hard codes values for glazing
let allGlazes = [
    {
        choice: 'Keep original',
        price: 0
    },
    {
        choice: 'Sugar milk',
        price: 0
    },
    {
        choice: 'Vanilla milk',
        price: 0.5
    },
    {
        choice: 'Double chocolate',
        price: 1.5
    }
]
//hardcodes values for pack size
let packSize = [
    {
        size: '1',
        multiplier: 1
    },
    {
        size: '3',
        multiplier: 3
    },
    {
        size: '6',
        multiplier: 5
    },
    {
        size: '12',
        multiplier: 10
    }
]

//selects the glazing select html and adds all options
let glazingSelect = document.querySelector('#glazing')
for(let i = 0; i <allGlazes.length; i++){
    var option = document.createElement('option')
    option.text = allGlazes[i].choice
    option.value = i
    glazingSelect.add(option)
}

//selects the size select html and adds all options
let sizeSelect = document.querySelector('#size')
for(let i = 0; i <packSize.length; i++){
    var option = document.createElement('option')
    option.text = packSize[i].size
    option.value = i
    sizeSelect.add(option)
}


//gets the p tag that displays the price
let price = document.querySelector('#totalPrice')
price.innerHTML = '$' + 2.49


//on change function that changes the displayed total price based on selected glazing value
function glazingChange(element){
    const priceChange = element.value
    const size = document.querySelector('#size').value
    price.innerHTML = '$' + ((2.49 + allGlazes[priceChange].price) * packSize[size].multiplier).toFixed(2)
}

//on change function that changes the displayed total price based on selected size value
function sizeChange(element){
    const sizeChange = element.value
    const glazing = document.querySelector('#glazing').value
    price.innerHTML = '$' + ((2.49 + allGlazes[glazing].price) * packSize[sizeChange].multiplier).toFixed(2)
}