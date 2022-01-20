const country = "United States Of America";
const continent = "North America";
let isIsland = "isIsland";
let population = "331893745";
let langauge = ["English", "Spanish"];
console.log(continent, isIsland, country, langauge, population);

population = population / 2 + 1;
console.log(population);

finlandPopulation = "554030";
console.log(finlandPopulation);

console.log(finlandPopulation < population);

averagePopulation = "33000000";
console.log(averagePopulation);

console.log(averagePopulation < population);

const countryPortugal = "Portugal";
const continentPortugal = "Europe";
let populationPortugal = "11000000";
let langaugePortugal = ["portugese"];
console.log(countryPortugal, continentPortugal, populationPortugal);

let place = (countryPortugal) + ' ' + 'is in' + ' ' + (continentPortugal) + ' ' + 'and its' + ' ' + (populationPortugal) + ' ' + 'people speak' + ' ' + (langaugePortugal);
console.log(place);

let newPlace = `${countryPortugal} is in ${continentPortugal} and its ${populationPortugal} people speak ${langaugePortugal};`
console.log(newPlace);

console.log(populationPortugal < population);


if (populationPortugal >= averagePopulation) {
  console.log(`${countryPortugal}'s population is above average`);

} else {
  const belowPopulation = averagePopulation - populationPortugal;
  console.log(`${countryPortugal}'s population is ${belowPopulation} below average`);
}

let x = 9 - 5;
x = 19 - 13 + 17;
x = 19 - 13 + 17;
x = 123 < 57;
x = 5 + 6 + 4 + 9 - 4 - 2;
console.log(x);
