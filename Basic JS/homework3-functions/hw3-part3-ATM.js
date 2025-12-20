/*Part 3
Write a JavaScript function for an ATM: ATM should give cash 
Return "Not enough money" if requested more than balance 
Return amount withdrawn and money left if enough Hardcode your account money in the program Bonus: Make it work with prompt()!*/

function atmWithdraw(){
  let balance = 1000;
  let amount = Number(prompt("Current balance: 1000. \nEnter amount to withdraw:"));

  if(amount > balance){
    alert(`Not enough money! Your current balance is: ${balance}`);
  } else {
    balance -= amount;
    alert(`Withdrawn: ${amount} \nMoney left: ${balance}.`);
  }
}

atmWithdraw();

