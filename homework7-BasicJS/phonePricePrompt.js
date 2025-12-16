let numberOfPhones = prompt("Enter the number of phones to purchase:");
let phonePrice = prompt("Enter the price of the phone:"); //prompt returns a string
let taxRate = prompt("Enter the tax rate (as a percentage, e.g., enter 5):");

//convert the string inputs to numbers
let numberOfPhonesInt = parseInt(numberOfPhones); //convert to number (integer) 
let phonePriceFloat = parseFloat(phonePrice); //convert to number (float)
let taxRateFloat = parseFloat(taxRate); //convert to number (float)

let totalPriceWithoutTax = phonePriceFloat * numberOfPhonesInt; //calculate total price without tax
let taxAmount = totalPriceWithoutTax * (taxRateFloat / 100); //calculate tax amount
let totalPrice = totalPriceWithoutTax + taxAmount; //calculate total price  
console.log("Phone Price: $" + phonePriceFloat);
console.log("Tax Amount: $" + taxAmount);
console.log("Total Price (including tax): $" + totalPrice);

alert("Total Price is: $" + totalPrice);