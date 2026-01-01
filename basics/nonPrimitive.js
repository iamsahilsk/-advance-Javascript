let username ={Name:"sahil kumar",
    rollNO:2,
}
console.log(username);
console.log(typeof username);
console.log(username.Name);
/* when we will use the const keyword to create the 
object varible then the memory for it will be reserved
the key-valued pair can be changed using const keyword also*/
const anotherUser ={fisrtName:"sahil",lastName:"kumar",
    "final marks":2444,
}
anotherUser.rollNumber = 2;
anotherUser["final marks"] = 99;
console.log(anotherUser);
console.log(typeof anotherUser);

//implicit type converstion:
console.log(1+"1");
console.log(true +1);
console.log(null +1);
//explicit type converstion:
console.log(number("1")+1);
console.log(number(false)+1);
//string literals:
let value = 25%5;
console.log(`the string  ${value} can be also written in this format!`);
// array:
// array can be both homo and hetrogenous data types in the javascript:
let hero = ["sahil","shyam","karan",true,false,2];
//indexing always start from 0;
console.log(hero[0]);
for(let i=0;i<hero.length();i++){
    console.log(hero[i]);
}


