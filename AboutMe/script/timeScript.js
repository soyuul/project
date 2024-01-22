const giveaway = document.querySelector(".giveaway");

let tempDate = new Date();

let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// 시간 셋업(원하는 시간대로 설정)
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
// 원래 날짜에 10을 더하고 11:30:00으로 맞춘다.

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// 현재 시간
giveaway.textContent = `${date}day ${hours}:${minutes}:`;

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    // console.log(today);
    const t = futureTime - today;

    // 1s = 1000ms
    //  1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24*60*60*1000;
    // console.log(oneDay);
    const oneHour = 60*60*1000;
    
    const oneMinute = 60*1000;
    // calcucalte all values
    let days = t/oneDay;
    // console.log(days);
    days = Math.floor(days);
    let hours = Math.floor((t%oneDay) / oneHour);
    // console.log(hours);
    let minutes = Math.floor((t%oneHour) / oneMinute);
    // console.log(minutes);
    let seconds = Math.floor((t%oneMinute) / 1000);
    // console.log(seconds);

    // set values array;
    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item;
    }

    giveaway.textContent = `${date}day ${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

// countdown (덕분에 눈에 보인다)
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
