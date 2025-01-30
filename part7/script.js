//example 1

document.getElementById('changeTextButton').addEventListener('click',function (){
    // console.log(this);
    let paragraph = document.getElementById('myParagraph')
    console.log(paragraph)
    paragraph.textContent = 'the paragraph is changed';
})

// example 2

document.getElementById('hightlightFirstCity').addEventListener('click', function () {
    let citiesList = document.getElementById('citiesList')
    citiesList.firstElementChild.classList.add('highlight')
    
    
})

//example 3

document.getElementById('changeOrder').addEventListener('click', function(){
    let coffeeType = document.getElementById('coffeeType')
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "green"
    coffeeType.style.padding = "8px"
})

//example 4
document.getElementById('addNewItem').addEventListener('click', function () {
    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";

    document.getElementById('shoppingList').appendChild(newItem)
})

// example 5
document.getElementById('removeLastTask').addEventListener('click', function () {
    let taskList = document.getElementById('taskList')
    taskList.firstElementChild.remove()
})

// exaple 6

// document.getElementById('clickMeBtn').addEventListener('click', function () {
//     alert('You clicked button')
// })

document.getElementById('clickMeBtn').addEventListener('dblclick', function () {
    alert('You double clicked ')
})
document.getElementById('clickMeBtn').addEventListener('mouseover', function () {
    alert('You double clicked ')
})

// example 7

document.getElementById('teaList').addEventListener('click', function (event) {
    if (event.target && event.target.matches('.teaItem')) {
        alert('You selected: ' + event.target.textContent)
    }
}) 

// example 8
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let feedback = document.getElementById('feedbackInput').value;
    console.log(feedback);
    document.getElementById('feedbackDisplay').textContent = `Feedback is: ${feedback}`
    
})

// example 9

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('domStatus').textContent = "DOM fully loaded"
})

// example 10
document.getElementById('toggleHighlight').addEventListener('click' , function () {
    let descriptionText = document.getElementById('descriptionText')
    descriptionText.classList.toggle('highlight')
})
