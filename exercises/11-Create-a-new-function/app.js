/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom() {
    let numero1 = Math.random(); 
    let numero2 = 10 * numero1;
    let numero3 = Math.floor(numero2);
    return numero3
}
random = generateRandom();
console.log(random);