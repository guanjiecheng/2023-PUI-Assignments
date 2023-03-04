//Hard codes values for glazing
let allGlazes = [
    {
        choice: 'Keep Original',
        price: 0
    },
    {
        choice: 'Sugar Milk',
        price: 0
    },
    {
        choice: 'Vanilla Milk',
        price: 0.5
    },
    {
        choice: 'Double Chocolate',
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

