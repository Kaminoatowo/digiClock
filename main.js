// create object

// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;


// date object for current location
const date = new Date();

// get time from the date object
let time = date.getTime();

// get years from the date object
let years = Math.round(time / year);

// get current date 
let today = date.getDate() + '-' + (date.getMonth() + 1 ) + '-' + date.getFullYear();
document.getElementById("today").innerHTML = today; 

let now = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
document.getElementById("now").innerHTML = now;

async function updateTimeAndDate() {

    // date object for current location
    const date = new Date();

    // get time from the date object
    let time = date.getTime();

    // get years from the date object
    let years = Math.round(time / year);

    // get current date 
    let today = date.getDate() + '-' + (date.getMonth() + 1 ) + '-' + date.getFullYear();
    document.getElementById("today").innerHTML = today; 

    let now = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    document.getElementById("now").innerHTML = now;
}

let myInterval = setInterval(updateTimeAndDate, 1000);