//  type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
//to convert to a number use console.log(Number(inputyear))
//you can as do the second one as console.log (inputYear)
console.log(inputYear + 18);
// to convert a string"1991"into a number 1991
console.log(Number(inputYear) + 18);

// converting a string which is not a number
//console.log(Nunber("Jane")); //the result is not a number

//console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
console.log(`I am` + " " + 34 + " " + `years old`);
console.log(`23` - `10` - 3); //result is 10
console.log(`23` + `10` + 3);
console.log(34 * 8);

let n = "1" + 1; // '11
n = n - 1; //the string willbe converted to a number 11 then u minus

console.log(n);
let J = 2 + 3 + 3 + "9";
console.log(J); //2+3+3=8...+ a string =89
