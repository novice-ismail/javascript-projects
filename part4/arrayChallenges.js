/*
1. Access the first element of the array
*/

let teaFlavours = ["green tea", "black tea", "oolong tea"]

 const firstTeat = teaFlavours[0]

 /*
 2. access the third element
 */

 let cities = ["London", "Tokyo", "Paris", "New York"]
  const favriteCity = cities[2]

  /* 
  3.Change the second element of the array
  */

 let  teaTypes = ["herbal tea", "white tea", "masala tea"];
 teaTypes[1] = "jasmine tea"
console.log(teaTypes);

/* 
4.add an element to array
*/

let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")
// citiesVisited[2] = "Berlin"
console.log(citiesVisited);

/* 
5. Remove the last element 
*/

let teaOrders = ["chai", "ice-tea", "matcha", "early grey"]
let lastOrder = teaOrders.pop()
console.log(lastOrder);

/* 
6.Create a softCopy of the array
*/

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas
// console.log(softCopyTeas);

/* 
7. Craete a hard copy of the array named   `hardCopyCities `
*/

let topCities = ["Berlin", "Singapore", "New York"]
// let hardCopyCities = [...topCities]
let hardCopyCities = topCities.slice()
topCities.pop()
console.log(hardCopyCities);

/* 
8.Merge two arrays
*/

 let europeanCities = ["Paris" ,"Rome"]
 let asianCities = ["Tokyo", "Bangkok"] 
 let worldCities = europeanCities.concat(asianCities)
 console.log(worldCities);


 /*
 9.find the length of the array
 */
 
 let teaMenu = ["masala chai", "oolong tea", "green tea","early grey"]

 let menuLength = teaMenu.length;
 console.log(menuLength);

 /*
 10.chech if the given element is there in the array or not
 */
let cityBucketList = ["Kyoto", "London","Cape Town", "Vancouver"]
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList);

 





