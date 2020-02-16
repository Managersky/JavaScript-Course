const opts1 = {
    pauseTime: 0,
    prevText: "Poprzedni",
    nextText: "Następny"
}

const slide1 = new Slider('#slider1', opts1);

const opts2 = {
    pauseTime: 5000,
    generateDots: false
}
const slide2 = new Slider('#slider2', opts2);

const opts3 = {
    pauseTime: 3000,
    generateDots: true,
    generatePrevNext: false
}
const slide3 = new Slider('#slider3', opts3);