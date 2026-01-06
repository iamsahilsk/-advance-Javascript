//challenge 1:
{
    let teas =["green tea","black tea","chai","oolong tea"];
let SelectedTeas=[];
for(let i=0;i<teas.length;i++){
    if(teas[i]==="chai" || teas[i]==="Chai")
        break;
    SelectedTeas.push(teas[i]);

}
}

//challenge 2:
{
let cties = ["london","New York","Paris","Berlin"];
let visitedCities =[];
for(let i =0;i<cties.length;i++){
    if(cties[i]==="Paris" || cties[i]=="paris"){
        continue;
    }
    visitedCities.push(cties[i]);
}
}

//challenge 3:
//using for of loop:
//since both array and object are same so
let number = [1,2,3,4,5];
let smallNumber =[];
for(const num of number){
    if(num===4){
        break;
    }
    smallNumber.push(num);
}
//challenge 4:
let teas =["green tea","black tea","chai","herbal tea","oolong tea"];
let preferredTeas=[];
for(const tea of teas){
    if(tea ==="herbal tea"){
        continue;
    }
    preferredTeas.push(tea);

}
// challenge 5:
let citiesPopulation={
    "London":890000,
    "New York":84000,
    "Paris":220000,
    "Berlin":35000,
}
let cityPopulations ={};

for(const key in citiesPopulation){
    if(key =="Berlin")
        break;
    cityPopulations[key] = citiesPopulation[key];
}
//challenge 6:
let worldCities ={
    "sydney" :500000,
    "tokyo":900000,
    "Berlin":35000,
    "paris": 220000,
};
let largeCities ={};
for(const key in worldCities){
    if(worldCities[key]<3000000){
        continue;
    }
    largeCities[key] = worldCities[key];
}
//challenge 7:
//for each loop:
let teaCollection =["earl grey","green tea","chai","oolong tea"];
let availbaleTeas = [];
teaCollection.forEach(function (tea){
    if(tea ==="chai")
        return;
    availbaleTeas.push(tea);
});
//challenge 8:
let cityName =["Berlin","Tokyo","sydney","paris"];
let traveledCities =[];
cityName.forEach(function (city){
    if(city==="Sydney")
        return;
    traveledCities.push(city);
})
//challenge 9:
let numbers =[2,5,7,9];
doubledNumbers =[];
for(let i =0;i<numbers.length;i++){
    if(number[i]===7){
        continue;
    }
    doubledNumbers.push(numbers[i]*2);
}
//challenge 10:
let Teas =["chai","green tea","black tea","jasmine tea","herbal tea"];
let shortTeas =[];
for(const tea of Teas){
    if (tea.length > 10){
        break;
    }
    shortTeas.push(tea);
}