console.log("this is project alarm clock");

//Add an event listener to a submit button
const alarmSubmit = document.getElementById("alarmSubmit");
alarmSubmit.addEventListener("click", SetAlarm);

//function of an alarm tone
function ringBell() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
    audio.play();
}

//function to set an alarm and play the tone
function SetAlarm(e) {
    e.preventDefault();
    //regular exp for date validation
    let regex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/;
    if (regex.test(alarm.value)) {
        const alarm = document.getElementById("alarm");
        let alarmTime = alarm.value
        alarmDate = new Date(alarmTime);
        console.log(`setting your alarm at time.... ${alarmDate}`);

        nowTime = new Date();
        let timeToAlarm = alarmDate - nowTime;
        console.log(timeToAlarm);

        if (timeToAlarm >= 0) {
            setTimeout(() => {
                console.log("ringing now");
                ringBell();
            }, timeToAlarm);
        }
    }
    else {
        console.log("invalid date");
    }

}