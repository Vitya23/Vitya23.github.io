(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    let launch = 'Jan 1,2022 00:00:00',
        countDown = new Date(launch).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText =
                Math.floor(distance / (day)),
                document.getElementById("hours").innerText =
                Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText =
                Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText =
                Math.floor((distance % (minute)) / second);

            if (distance < 0) {


                clearInterval(x);
            }
            //seconds
        }, 0)
}());