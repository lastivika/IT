let deadline = '08-14-2022';
function getTime(endline) {
    let time = Date.parse(deadline) - Date.parse(new Date()); //parse - переводить всю дату в мілісекунди
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / 1000 / 60) % 60);
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    let days = Math.floor((time / (1000 * 60 * 60 * 24)));
    console.log(days, hours, minutes, seconds);


    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    }

    // console.log(Date.parse(deadline));
    // console.log(Date.parse(new Date()));
    // console.log(time);

    // let newTime = new Date(2022, 1, 1);
    // console.log(newTime);
}

function sedTime(id, endtime){
    let timer1 = document.getElementById(id);
    let seconds = timer1.querySelector('.seconds');
    let minutes = timer1.querySelector('.minutes');
    let hours = timer1.querySelector('.hours');
    let days = timer1.querySelector('.days');
    timeInterval = setInterval(updateTime, 1000)
    function updateTime(){
        let time = getTime(endtime);
        seconds.textContent= `${time.seconds} Секунд`;
        minutes.textContent= `${time.minutes} Хвилин`;
        hours.textContent= `${time.hours} Годиин`;
        days.textContent= `${time.days} Днів`;

        if (time.total <- 0){
            clearInterval(timeInterval)
        }
    }
}

sedTime('timer1', deadline);