const array1 = ['one', 'two', 'three'];

const reversed = array1.reverse();
console.log('reversed:', reversed);

const array2 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
  );
  
  console.log(array2);

  var keys = [];

with (Array.prototype) {
  keys.push('something');
}

Object.keys(Array.prototype[Symbol.unscopables]);


const array3 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array3.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array3.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"


