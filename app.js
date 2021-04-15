
"use strict";

let firstName = "Sevington";

console.log(firstName.replace("o", "a"));

// assignment Operators


console.log(5===5);

let doesEqual = 5 === 5;
console.log(doesEqual);

let stopLight = 'purple';

if (stopLight === 'green') {
console.log ('go');
} else if(stopLight == 'red') {
     console.log('stop');
} else {
    console.log ('slowdown');
}


// while loop
// for loop


let count = 0;

while (count !== 10) {
     console.log(count);
      count += 1; //take count = count + 1/ 
    // count ++ // another way of writing count += 1
}

let countDown = 10;

while(countDown >= 0) { //think through on how to make this false
    console.log('countDown', countDown);
    countDown--; //one way to make some count down
    countDown -= 2; // if I want to make something count down by more than 1 this is how i would do it
}

for(let X = 0; x < countDown; x++) {
    console.log(x);
} 













