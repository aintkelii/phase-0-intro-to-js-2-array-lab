function appendCat(cat) {
  return [...cats, cat];
} 
function destructivelyAppendCat(cat) {
  cats.push(cat);
}
function prependCat(cat) {
  return [cat, ...cats];
}
function destructivelyPrependCat(cat) {
  cats.unshift(cat);
}
function removeLastCat() {
  return cats.slice(0, -1);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function removeFirstCat() {
  return cats.slice(1);
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}

const cats = ["Milo", "Otis", "Garfield"];


module.exports = cats;