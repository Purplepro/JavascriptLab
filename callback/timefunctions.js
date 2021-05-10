function Alarm() {
    console.log('Get Up');
}

function shhh() {
    clearInterval(kids);
}

const kids = setInterval(Alarm, 1000);
setTimeout(shhh, 10000);


function carMovement() {
  console.log('vrooom');
}

function carSlowDown() {
  clearInterval(stop)
}

const stop = setInterval(CarMovement, 1000)
setTimeout(carSlowDown, 2000)
