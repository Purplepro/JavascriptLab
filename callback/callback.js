function checkInstagram(username) {
    // write code and test
    console.log(username + 'entered')
}
function useMobileDevice(typeOfPhone, funcName, param) {
    let nameOfFunction = funcName.name;
    if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
        console.log('Facetime is only a feature on iPhones');
        return;
    }
    console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
    funcName(param);
}
useMobileDevice('use my' typeOfPhone + 'to enter' username)
// half way written out

function makePhoneCall(contact) {
    // write code and test
}
function useMobileDevice(typeOfPhone, funcName, param) {
    let nameOfFunction = funcName.name;
    if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
        console.log('Facetime is only a feature on iPhones');
        return;
    }
    console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
    funcName(param);
}

function playSpotify(song) {
    // write code and test 
}
    function useMobileDevice(typeOfPhone, funcName, param) {
        let nameOfFunction = funcName.name;
        if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
            console.log('Facetime is only a feature on iPhones');
            return;
        }
        console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
        funcName(param);
    }


function checkEmail(emailProvider) {
    // write code and test
}
function useMobileDevice(typeOfPhone, funcName, param) {
    let nameOfFunction = funcName.name;
    if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
        console.log('Facetime is only a feature on iPhones');
        return;
    }
    console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
    funcName(param);
}

function sendEmail(message) {
    console.log('Send a ' + message)
    // write code and test
}
function sendTextMessage(contact) {
    console.log(`Yo, what's the word ${contact}`);
}
function takePicture(filter) {
    console.log(`Take picture with ${filter} filter`);
}
function faceTime(friend) {
    console.log(`Facetiming my friend ${friend}...`);
}


function useMobileDevice(typeOfPhone, funcName, param) {
    let nameOfFunction = funcName.name;
    if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
        console.log('Facetime is only a feature on iPhones');
        return;
    }
    console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
    funcName(param);
}
useMobileDevice('iPhone', message, 'Sebastian');
console.log('---');
useMobileDevice('Android', faceTime, 'Jake');
console.log('---');
// useMobileDevice('iPhone', takePicture, 'portrait');
*/

function myMobileDevice(typeOfPhone, speed, funcA) {
    let deviceAction = typeOfPhone.name;

    if(typeOfPhone === 'Google Phone' && )
}

myMobileDevice('')


// Make a function called (getAverage) that takes in an (array) of (numbers) and returns the average
// of all the numbers in the array.
function getAverage(numbers) {
    // pretend we had the function down
    let result = 0; // what datatype is the result? Number
    let len = numbers.length; // 4
    // for loops and there's while loops
    for (let i = 0; i < numbers.length; i++) {
        // make a intermediate variable (temp variable)
        let num = numbers[i]; // 5
        // add each num to the result
        result = result + num; // 20   
    }
    console.log(result);
    // I know to get the length of the array I can say
    return result / len;
    // return value is going to be a number
}
console.log(getAverage([5,5,5,5])); // 5

