let phonePrice =119.95;
let numOfPhones = 30;
let taxRate = 0.05; //5% tax

let totalPriceWithoutTax = phonePrice * numOfPhones;
let taxAmount = totalPriceWithoutTax * taxRate;
let totalPriceWithTax = totalPriceWithoutTax + taxAmount;

console.log("Total price without tax:" + totalPriceWithoutTax);
console.log("Tax amount (5%) on 30 phones:" + taxAmount); 
console.log("Total price with tax:" + totalPriceWithTax);

//$125.9475