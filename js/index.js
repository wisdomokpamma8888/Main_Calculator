import Calculator from './calculator.js'

// Global Function
/* 1st Way */
function selector(name) {
    return document.querySelector(name)
}

function selectors(name) {
    return document.querySelectorAll(name)
}

/* 2nd Way */
// const selector = function (name) {
//     return document.querySelector(name)
// }

/* 3rd Way */
// const selector = name => document.querySelector(name)

const allClearBtn = selector('#allClear')
const deleteBtn = selector('#delete')
const equalsBtn = selector('#equals')

const operatorBtns = selectors('.operation')
const numberBtns = selectors('.number')

const previousScreen = selector('#previousScreen')
const currentScreen = selector('#currentScreen')

// Instantiate

const calculator = new Calculator(previousScreen, currentScreen)

// Events
numberBtns.forEach(function (btn) {
    btn.onclick = function (e) {
        calculator.appendNumber(e.target.innerHTML)
        calculator.updateScreen()
    }
})

allClearBtn.onclick = function () {
    calculator.clear()
    calculator.updateScreen()
}

deleteBtn.onclick  = function () {
    calculator.delete()
    calculator.updateScreen()
}

equalsBtn.onclick = function () {
    calculator.compute()
    calculator.updateScreen()
}

operatorBtns.forEach(function (btn) {
    btn.onclick = function (e) {
        calculator.chooseOperator(e.target.innerHTML)
        calculator.updateScreen()
    }
})
