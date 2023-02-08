/**
 * When provided a num if it is divisible by 3 it will return "Fizz"
 * When provided a num if it is divisible by 5 it will return "Buzz"
 * When provided a num that is divisible by 3 and 5 it will return "Fizz Buzz"
 * When provided a num that is not divisible by 3 or 5 it will return the num value
 * @param num 
 * @returns num|string
 */
function fizzbuzz(num: number) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Fizz Buzz"
    }

    if (num % 5 === 0) {
        return "Buzz"
    }

    if (num % 3 === 0) {
        return 'Fizz'
    }

    return num
}

/**
 * This function when called and provided a number input will 
 * perform a for loop from 0 - num and console output all the values
 * @param num 
 */
function fizzBuzzLoop(num: number) {
    for (let i = 0; i <= num; i++) {
        console.log(`value: ${i}: ${fizzbuzz(i)}`)
    }
}

fizzBuzzLoop(100);

export default fizzbuzz;
