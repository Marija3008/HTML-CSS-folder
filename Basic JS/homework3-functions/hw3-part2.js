let dogAgeInput = prompt("Enter your dog's age: ");
let dogAge = parseInt(dogAgeInput);

let humanAgeInput = prompt("Enter your age:");
let humanAge = parseInt(humanAgeInput);

function humanToDogYears(humanAge) {
  let result = humanAge * 7;
  console.log(result);
  alert(`Your ${humanAge} years are ${result} in dog years.`)
  return result;
}

function dogToHumanYears(dogAge){
  let result = dogAge / 7;
  console.log(result);
  alert(`Dog's ${dogAge} years are ${result} human years.`)
  return result;
}

humanToDogYears(humanAge);
dogToHumanYears(dogAge);
