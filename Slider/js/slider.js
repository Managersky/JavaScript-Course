const Slider = function (elemSelector) {
    this.currentSlide = 0; //aktualny slide
    this.sliderSelector = elemSelector; //selektor elementu który zamienimy na slider
    this.elem = null; //tutaj pobierzemy element ktory zamienimy na slider
    this.slider = null; //tutaj wygenerujemy slider
    this.slides = null; //tutaj pobierzemy slajdy
    this.prev = null; //przycisk prev
    this.next = null; //przucisl next
    this.dots = []; //przyciski kropek

    this.generateSlider();
    this.changeSlide(this.currentSlide);
}

Slider.prototype.generateSlider = function () {
    //pobieramy element który zamienimy na slider
    this.slider = document.querySelector(this.sliderSelector);
    this.slider.classList.add('slider');

    //tworzymy kontener dla slajdow
    const slidesCnt = document.createElement('div');
    slidesCnt.classList.add('slider-slides-cnt');

    //pobieramy element slajdów
    this.slides = this.slider.children;

    //to jest żywa kolekcja, więc przy przeniesieniu kazdego slajda
    //jej dlugosc maleje
    while (this.slides.length) {
        this.slides[0].classList.add('slider-slide');
        //jeżeli element appendujemy do innego elementu
        //to tak jakbyśmy go usuwali z tej kolekcji
        //bo jeden element nie może być równocześnie w 2 miejscach
        slidesCnt.appendChild(this.slides[0]);
    }

    //musimy na nowo pobrać slajdy, bo powyższa kolekcja jest już pusta
    this.slides = slidesCnt.children;

    //wygenerowaliśmy kontener ze slajdami, wstawiamy go więc do slidera
    this.slider.appendChild(slidesCnt);

    this.createPrevNext();
    this.createDots();
}

Slider.prototype.createPrevNext = function () {
    this.prev = document.createElement('button');
    this.prev.type = "button";
    this.prev.innerText = "Poprzedni slide";
    this.prev.classList.add('slider-button');
    this.prev.classList.add('slider-button-prev');
    this.prev.addEventListener('click', this.slidePrev.bind(this));

    this.next = document.createElement('button');
    this.next.type = "button";
    this.next.innerText = "Następny slide";
    this.next.classList.add('slider-button');
    this.next.classList.add('slider-button-next');
    this.next.addEventListener('click', this.slideNext.bind(this));

    const nav = document.createElement('div');
    nav.classList.add('slider-nav');
    nav.setAttribute('aria-label', 'Slider prev next');
    nav.appendChild(this.prev);
    nav.appendChild(this.next);
    this.slider.appendChild(nav);
}

Slider.prototype.createDots = function () {
    const ulDots = document.createElement('ul');
    ulDots.classList.add('slider-dots');
    ulDots.setAttribute('aria-label', 'Slider pagination');

    //tworzymy pętlę w ilości liczby slajów
    for (let i = 0; i < this.slides.length; i++) {
        //każdorazowo tworzymy LI wraz z buttonem
        //każdy button po kliknięciu zmieni slajd
        //za pomocą metody changeSlide()

        const li = document.createElement('li');
        li.classList.add('slider-dots-element');

        const btn = document.createElement('button');
        btn.classList.add('slider-dots-button');
        btn.type = "button";
        btn.innerText = i + 1;
        btn.setAttribute('aria-label', 'Set slide ' + (i + 1));

        btn.addEventListener('click', function () {
            this.changeSlide(i);
        }.bind(this));

        li.appendChild(btn);

        ulDots.appendChild(li);

        //wygenerowany przycisk wrzucamy do wspólnej tablicy
        //dzięki temu potem łatwiej będzie nam się do tych kropek odwoływać
        this.dots.push(li);
    }

    this.slider.appendChild(ulDots);
}

Slider.prototype.changeSlide = function (index) {
    //robimy pętlę po slajdach usuwając klasę active
    [].forEach.call(this.slides, function (slide) {
        slide.classList.remove('slider-slide-active');
        slide.setAttribute('aria-hidden', true);
    });

    //dodajemy ją tylko wybranemu
    this.slides[index].classList.add('slider-slide-active');
    this.slides[index].setAttribute('aria-hidden', false);

    //podobny manewr robimy dla kropek
    this.dots.forEach(function (dot) {
        dot.classList.remove('slider-dots-element-active');
    });
    this.dots[index].classList.add('slider-dots-element-active');

    //aktualny slide przestawiamy na wybrany
    this.currentSlide = index;

    clearInterval(this.time);
    this.time = setTimeout(function () {
        this.slideNext();
    }.bind(this), 6000); //co 6 sekund automatycznie się przełączy
}

Slider.prototype.slidePrev = function () {
    this.currentSlide--;
    if (this.currentSlide < 0) {
        this.currentSlide = this.slides.length - 1;
    }
    this.changeSlide(this.currentSlide);
}

Slider.prototype.slideNext = function () {
    this.currentSlide++;
    if (this.currentSlide > this.slides.length - 1) {
        this.currentSlide = 0;
    }
    this.changeSlide(this.currentSlide);
}