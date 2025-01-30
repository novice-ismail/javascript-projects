function* nuberGenerator () {
    yield 1;
    yield 2;
    yield 3;
}

let gen = nuberGenerator();
let genTwo = nuberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);

