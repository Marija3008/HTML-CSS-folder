let input = prompt("Enter your year of birth: ");
let year = parseInt(input);
console.log(year);

let zodiacSign = (year - 4) % 12;
console.log(zodiacSign);

let zodiac;

switch (zodiacSign) {
  case 11:
    zodiac = "pig";
    break;
  case 10:
    zodiac = "dog";
    break;
  case 9:
    zodiac = "rooster";
    break;
  case 8:
    zodiac = "monkey";
    break;
  case 7:
    zodiac = "goat";
    break;
  case 6:
    zodiac = "horse";
    break;
  case 5:
    zodiac = "snake";
    break;
  case 4:
    zodiac = "dragon";
    break;
  case 3:
    zodiac = "rabbit";
    break;
  case 2:
    zodiac = "tiger";
    break;
  case 1:
    zodiac = "ox";
    break;
  case 0:
    zodiac = "rat";
    break;
  default:
    zodiac = "Invalid Input!";
}
console.log(zodiac);

if (zodiac === "invalid input") {
  alert("Enter a valid year!");
} else {
  alert(`Your Chinese zodiac sign is ${zodiac}!`);
}
