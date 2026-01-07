//print number from 1 to N:
{
    let number = Number(prompt("enter the number: "))
for(let i =1;i<=number;i++){
    console.log(i);
}
}
//print NUnvers from n to 1 without changing the loop
{
    let number = Number(prompt("enter the number : "));
for(let i=number;i>0;i--){
    console.log(i);
}
}
{
    //print all even number form 1 to n:
    let number = Number(prompt("enter the number :"));
    for(let i=2;i<=number;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
{
    //sum of first N Natural Numbers:
    let number = Number(prompt("enter the number: "));
    let sum =0;
    for(let i=1;i<=number;i++){
        sum +=i;
    }
    console.log(sum);
}
{
    //product of natural Numbers:
    let number = Number(prompt("enter the numbers:  )");
    let product =1;
    for(let i=1;i<=number;i++){
        product *=i;
    }
}
{
    //sum of all even numbers up to N:
    let number = Number(prompt("enter the number: "));
    let sum =0;
    for(let i=0;i<=number;i++){
        if(i%2==0){
            sum +=i;
        }
    }
}
{
    //print squares of Numbers from 1 to N:
    let number = Number(prompt("enter the number: "));
    for(let i=1;i<=number;i++){
        console.log(i*i);
    }
}
{
    //print all numbers divisible bu 3 and 5 up to N:
    let number =Number(prompt("enter the number:"));
    for(let i=1;i<=number;i++){
        if(i%3===0 && i%5===0){
            console.log(i);
        }
    }
}
{
    //Find the sum of all odd numbers up to N
    let number =Number(prompt("enter the numbers:"));
    let sum =0;
    for(let i =1;i<=number;i++){
        if(i%2!==0){
            sum +=i;
        }
    }
    console.log(sum);
    //or another method :
    {
         let number =Number(prompt("enter the numbers:"));
         let sum =0;
         for(let i=1;i<=number;i+=2){
            sum +=i;
         }
            console.log(sum);
    }
}
{
    //Print the cubes of numbers from 1 to N
    let number =Number(prompt("enter the number:"));
    for(let i =1;i<=number;i++){
        let cubes = i**3;
        console.log(cubes);
    }
}
{
    //Print only the numbers that are both even and perfect squares
     let number =Number(prompt("enter the number:"));
     
}