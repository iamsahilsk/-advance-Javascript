/* 1.challenge: 
to store the teaflavors and save it :
*/

let teaFlavors = ["green tea","black tea","oolong tea"];
let firstTea =teaFlavors[0];
// another way to declare:
let teaFlavor = new Array("green tea","black tea","oolong tea");
// 2.challenge:

let teaTypes =["herbal tea","white tea","masala chai"];
teaTypes[1]="jasmine tea";
console.log(teaTypes);
//3.challenge:

let cities = ["cities","london","tokyo","paris","New York"];
const favoriteCity = cities[2];
 
//4.challenge:

let citiesVisited =["mumbai","sydney"];
citiesVisited[2]="berlin";
//or when the index is large then use this common method:
citiesVisited[citiesVisited.length] ="Berlin";
//or by push method , it will add the value at the end of array:
citiesVisited.push("Berlin");

//5.challenge: we have to remove the last element :

let tearOrders =["chai","iced tea","matcha","earl grey"];
//last element to remove and we are not stroring the return value
tearOrders.pop();
//pop method not only remove the values it also return the value , it can store.
const lastOrder = tearOrders.pop();


//6.challenge:
let popularTeas =["green tea","oolong tea","chai"];
let softCopyTeas =popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);
//note: the pop() method effect will reflect on both , it is called as soft copy.

//7.challenge:

// to learn concept of hardcopy that does not reflect on the both variable

let topCities = ["Berlin","singapore","New York"];
//way to create the hard copy:
let hardCopyCities =[...topCities]
// another way to create hard copy:
let hardCopy = topCities.slice();

topCities.pop();
console.log(hardCopyCities);

//8.challenge:merge twp array:

let europeanCities = ["paris","Rome"];
let asianCities =["Tokyo","Bangkok"];
let WorldCities = europeanCities.concat(asianCities);

//9.challenge: find the length of array and store it :

let teaMenu =["masala chai","oolong tea","green tea","earl grey"];
let manuLength = teaMenu.length;


//10.challenge:checking the element is there or not in the array:


let CityBucketList =["Kyoto","London","cape Town","Vancouver"];

let isLondonInList = CityBucketList.includes("London");



