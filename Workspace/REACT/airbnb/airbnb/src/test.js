const nums = [1, 2, 3, 4, 5];
const numsSq = nums.map((item) => item * item);
console.log(numsSq);

const names = ["ala", "ma", "kota"];
const bigNames = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

console.log(bigNames);

const words = ["jeden", "dwa", "trzy"];
const pWords = words.map((word) => `<p>${word}</p>`);

console.log("pWords");
