//function definition:
function orderTea(teaType){
    function confrimOrder(){
        return `Order comfirmed for chai`;
    }
    return confrimOrder();
}
let orderConfirmation =orderTea("chai");
console.log(orderConfirmation);
//arrow function :
const calculateTotal = (price,quantity) =>{
    return price * quantity;
}
//or 
const calculateTotall =(price,quantity) => price *quantity;

//higher order function :
function makeTea(tea){
    return `making : ${tea}`;
}
function processTeaOrder(teaFunction){
    return teaFunction("earl grey");
}
const ProcessedTea = processTeaOrder(makeTea);
//

function creatTeaMaker(){
    return function (teaType){
        return `Making ${teaType}`;
    }
}
let teaMaker = createTeaMaker("sahil kumar");
let result = teaMaker("green tea");
console.log(result);