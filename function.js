const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];
const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];
const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];

const addNumbers = (numbersArray) => {
    // pseudo code = plan of attack for my code
    // add all numbers in array
    // return a result(what data type am i returning)
    // 1 declarations
    let result = 0;

    // 2 logic or steps/algorithm to solve the problem or return value
    // for loop to iterate through

    for(let i = 0; i < numbersArray.length; i++);
         let temp = numbersArray[i]; //each element
         console.log(temp); //this console log is to help me see the result output

         result += temp; //result = result + temp //
         //temp is the number being added to. //result is where the count is starting from.

        //  3. return value
    return result;
}
    console.log(addNumbers(Numbers));



