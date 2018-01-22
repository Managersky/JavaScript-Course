// /*

// arguments Object 

// */

// function addNumbers() 
// {   
//     var suma = 0;
    
//     /*for (i = 0; i < arguments.length; i++)
//     {
//         suma += arguments[i];
//     }
//     */

//     for (var property in arguments)
//     {
//         suma += arguments[property];
//     }
//     return suma;
// }

// var suma = addNumbers(3,4,7,6,6);

// alert(suma);

/*
    pętla w pętli - tabliczka mnożenia ćwiczenie
 */

// var tabliczkaMnozenia ="<table>";

// for (var i = 0; i <= 10; i++)
// {   
//     tabliczkaMnozenia += "<tr>";

//     for (var j = 0; j <= 10; j++)
//     {
//         tabliczkaMnozenia += "<td>" + i * j + "</td>";
//     }
//     tabliczkaMnozenia += "</tr>";
// }

// tabliczkaMnozenia += "</table>";

// var rezultat = document.getElementById("rezultat");

// rezultat.innerHTML = tabliczkaMnozenia;

// var tekst = document.getElementById("tekst");
// var plus = document.getElementById("plus");
// var minus = document.getElementById("minus");

// plus.onclick = function() 
// {
//     tekst.className = "zwiekszCzcionke";
// }

// minus.onclick = function() 
// {
//     tekst.className = "zmniejszCzcionke";
// }

window.onload = function() 
{
    var toTopButton = document.getElementById("toTopButton");

    window.onscroll = function() 
    {
        var test = document.getElementById("test");
        var toTopButton = document.getElementById("toTopButton");

        var yScrollAxis = window.pageYOffset;

        if (yScrollAxis > 200)
            toTopButton.style.display = "block";
        else
            toTopButton.style.display = "none";

        test.innerHTML = yScrollAxis;
    };

    toTopButton.onclick =  function()
    {
        window.scrollBy(0, -1 * window.pageYOffset)
    };
};