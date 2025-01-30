let teas = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTea = [];

for(let i = 0; i < teas.length; i++) {
    if (teas[i] === 'chai') {
        break;
    }
    selectedTea.push(teas[i])
}
// console.log(selectedTea);

/* 
2. skip one element in an array
*/
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = []

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "Paris" || cities[i] === "paris") {
        continue;
    }

    visitedCities.push(cities[i])
    
}
// console.log(visitedCities);

// 3. store the elements before a targeted element use for-of loop

let numbers = [1, 2, 3, 4, 5];
let smallerNmbers = [];

for (const num of numbers) {

    if (num === 4) {
        break
    } {
        
    }
    smallerNmbers.push(num)
}

// console.log(smallerNmbers);



let teaTypes = ["chai", "green tea", "herbal tea", "black tea"]
let preferredTeas = [];
for (const tea of teaTypes ) {

    if (tea === "herbal tea") {
        continue;
    }
    preferredTeas.push(tea)
}

// console.log(preferredTeas);


// 5.for-in loop
let citiesPopulation = {
  "London": 8900000,
  "New York": 8400000,
  "Paris": 2200000,
  "Berlin": 3500000
};

let cityNewPopulation = {};
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
        // console.log(citiesPopulation[city]);
        // key = value
        if(city == "Berlin") break;
        cityNewPopulation[city] = citiesPopulation[city]
        
    }
    // console.log(cityNewPopulation);

    // 6.
    let worldCities = {
        Sydney: 5000000,
        Tokyo: 9000000,
        Berlin: 3500000,
        Paris: 2200000
    }

    let largeCities = {}

    for (const city in worldCities) {
        
            if(worldCities[city] < 3000000){
                continue
            }
            largeCities[city] = worldCities[city]
        }
        // console.log(largeCities); 

        //7. forEach

        let teaCollection = ["early grey", "green tea", "chai", "oolong tea"]
        let availableTeas = []

        teaCollection.forEach(function (tea) {
            if(tea === 'chai'){
                return;
            }

            availableTeas.push(tea)
        });

        // console.log(availableTeas);

    // 8.forEach skip through one element
    
    let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
    let traveledCities = [];

    myWorldCities.forEach((city) => {
        if(city === "Sydney") {
            return
        }
        traveledCities.push(city)
    })

    console.log(traveledCities);
    
    // 9.for loop

    let numberArr = [2, 5, 7, 9];
    let dobleNumbers = [];

    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] === 7) {
            continue;
        }

        dobleNumbers.push(numberArr[i] * 2)
    }
    console.log(dobleNumbers);
    

    // 10. for-of
    let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
    let shortTeas = []
    
    for (const tea of myTeas) {
        if (tea.length > 10) {
            break;
        }
        shortTeas.push(tea)
    }
    console.log(shortTeas);
    

        
    
    







