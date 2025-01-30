// 1.

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("lemon tea")
console.log(teaOrder);

// 2.
function orderTea (teaType) {
    function confirmOrder () {
        return `Order confirmed for chai`
    }
    return confirmOrder()
}
let orderConfirmation = orderTea("chai")
console.log(orderConfirmation);

// 3. arrow functions

const calculateTotal = (price, quantity) => {
    return price * quantity
}

let totalCost = calculateTotal(499,100)
console.log(totalCost);

//  4.Higherorder function

function makeMyTea(typeOfTea) {
    return `makeMyTea: ${typeOfTea}`
}

function processTeaOrder (teaFunction) {
    return teaFunction("earl grey")
}

let order = processTeaOrder(makeMyTea)
console.log(order);

// 5.

function createTeaMaker () {
    return function (teaType) {
        return `Making ${teaType}`
    }
}

let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));


