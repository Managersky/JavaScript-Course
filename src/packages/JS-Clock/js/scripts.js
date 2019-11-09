const clock = {

    clockElement: document.querySelector(".clock"),
    hours: 0,
    minutes: 0,
    seconds: 0,

    init: function() {

        this.hands = {
            hour: clock.clockElement.querySelector(".hour-hand"),
            minute: clock.clockElement.querySelector(".minute-hand"),
            second: clock.clockElement.querySelector(".second-hand"),
        };

        this.update(new Date());
    },

    update: function(time) {

        // var time = new Date();
        // var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000); //Multiply this by 60,000 (milliseconds in a minute) to get the milliseconds
        // var gmtTime = new Date(gmtMS);

        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();

        this.setHourHand();
        this.setMinuteHand();
        this.setSecondHand();

    },

    setSecondHand: function () {
            const degrees = this.seconds / 60 * 360;
            this.rotateHand(this.hands.second, degrees);
        },

    setMinuteHand: function () {
            const degrees = (this.minutes + this.seconds / 60) / 60 * 360;
            this.rotateHand(this.hands.minute, degrees);
        },

    setHourHand: function () {
            const degrees = (this.hours + this.minutes / 60 + this.seconds / 3600) / 12 * 360;
            this.rotateHand(this.hands.hour, degrees);
        },

    rotateHand: function (hand, degrees) {
            degrees += 90;
            hand.style.transform = `rotate(${degrees}deg)`;
        },
}

clock.init();
setInterval(() => clock.update(new Date), 1000);

// const london = document.getElementById("london");
// const newYork = document.getElementById("new-york");
// const warsaw = document.getElementById("warsaw");
// const tokyo = document.getElementById("tokyo");
// const moscow = document.getElementById("moscow");

// london.addEventListener("click", function () {
//     time.setHours(time.getHours() + 9);
// });

// newYork.addEventListener("click", function () {
//     time.setHours(time.getHours() + 4);
// });

// warsaw.addEventListener("click", function () {
//     time.setHours(time.getHours() + 5);
// });

// tokyo.addEventListener("click", function () {
//     time.setHours(time.getHours() + 6);
// });

// moscow.addEventListener("click", function () {
//     time.setHours(time.getHours() + 7);
// });