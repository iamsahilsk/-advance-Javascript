//find the sum of 1 t0 5;
//while loop:
{
let sum =0;
let i = 1;
while(i <= 5){
    sum +=i;//sum = sum +i;
    i++;
}
console.log(sum);
}
//counts down from 5 to 1:
{
    let countDown =[];
    let i=5;
while(i>0){
    countDown.push(i);
    i--;
}
}

//3.challenge:
{
    let teaCollection =[];
let tea = prompt("enther your favorite tea");

do{
    if(tea!=="stop"){
        teaCollection.push(tea);
    }
}while(tea!=="stop");
}

//challenge 4:
let total =0;
let i=1;
do{
    total+=i;
    i++;
}while(i<4);