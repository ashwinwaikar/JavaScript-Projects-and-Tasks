console.log("this is clock js file");

function UpdateClock() {
    //getting the current date
    let currentTime = new Date();
    // console.log(currentTime);

    // Extracting hours.mins and secs
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    //setting time to 12 if 0 hour comes
    currentHour = (currentHour == 0) ? 12 : currentHour;

    //pad 0 if digit is single digit number i.e Making 12 hrs clock
    currentHour = (currentHour > 12) ? (currentHour - 12) : currentHour;

    //to set AM/PM
    let timeOfDay = (currentHour < 12) ? "A.M" : "P.M";

    // setting 0 for good presentation if time is single digit
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    //Forming the time string
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    //passing it to innerText of the clock id
    let clock = document.getElementById("clock");
    clock.innerText = currentTimeStr;
}