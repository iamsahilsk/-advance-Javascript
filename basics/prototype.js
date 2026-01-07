let computer ={cpu:12};
let Hp ={ram:"4GB",__proto__:computer,

};
let Dell ={};
console.log(`hp `,hp.__proto__);
// let create a prototype:
let genericCar = {tyres:4};
let tesla = {
    driver:"AI"
}
Object.setPrototypeOf(tesla,genericCar);
console.log(`tesla`,Object.getPrototypeOf(tesla));