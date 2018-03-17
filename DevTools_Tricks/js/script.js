const dogs = [{
    name: "Burek",
    age: 2
}, {
    name: "Szarik",
    age: 5
},
{
    name: "Wiki",
    age: 3
}];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

//Regular
console.log("hello")

//Interpolated
console.log("Hello, It's %s!", "Me");
// console.log(`Hello It's ${var}`);

//Styled
console.log("%c Red color", "color: red");

//Warning
console.warn("OH NO :(");

//Error
console.error("YOU FAIL");

//Info
console.info("Some Info Text");

//Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "Thats Wrong"); //if something is false then we see that information, if true nohing happends

//clearing
console.clear();

//Viewing DOM Elements
console.dir(p);

//Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    // console.groupCollapsed(`${dog.name}`); //Hidden information
    console.log(`This is ${dog.name}`);
    console.log(`Age: ${dog.age}`);
    console.groupEnd(`${dog.name}`);
});

//Counting
console.count("Pies");
console.count("Pies");
console.count("Kot");
console.count("Kot");
console.count("Kot");
console.count("Kot");
console.count("Pies");
console.count("Pies");
console.count("Pies");
console.count("Kot");
console.count("Kot");

//Timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbros")
.then(data => data.json())
.then(data => {
    console.timeEnd("fetching data");
    console.log(data);
});

//Table
console.table(dogs);