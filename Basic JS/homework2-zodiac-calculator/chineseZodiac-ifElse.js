let input = prompt("Enter your year of burth:");
let year = parseInt(input);
console.log(year);

let chineseZodiacSign = (year - 4) % 12;
console.log(chineseZodiacSign);

let zodiac;
if (chineseZodiacSign === 11) {
  zodiac = "pig";
} else if (chineseZodiacSign === 10) {
  zodiac = "dog";
} else if (chineseZodiacSign === 9) {
  zodiac = "rooster";
} else if (chineseZodiacSign === 8) {
  zodiac = "monkey";
} else if (chineseZodiacSign === 7) {
  zodiac = "goat";
} else if (chineseZodiacSign === 6) {
  zodiac = "horse";
} else if (chineseZodiacSign === 5) {
  zodiac = "snake";
} else if (chineseZodiacSign === 4) {
  zodiac = "dragon";
} else if (chineseZodiacSign === 3) {
  zodiac = "rabbit";
} else if (chineseZodiacSign === 2) {
  zodiac = "tiger";
} else if (chineseZodiacSign === 1) {
  zodiac = "ox";
} else if (chineseZodiacSign === 0) {
  zodiac = "rat";
} else {
  zodiac = "invalid input!";
  // alert("Enter a valid year!");
}

console.log(zodiac);

if (zodiac === "invalid input") {
  alert("Enter a valid year!");
} else{
  alert(`Your Chinese zodiac sign is ${zodiac}!`);
}


