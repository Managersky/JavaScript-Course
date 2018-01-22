// Pomniejsz/zwiększ czcionkę

var tekst = document.getElementById("tekst");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");

plus.onclick = function() 
{
    tekst.className = "zwiekszCzcionke";
}

minus.onclick = function() 
{
    tekst.className = "zmniejszCzcionke";
}

function movingImage(e, objToMove)
{
    objToMove.style.left = e.clientX - objToMove.width / 2 + "px";
    objToMove.style.top = e.clientY - objToMove.height / 2 + "px";
}

window.onload = function() 
{
    // Scroll on top
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

    // Przesuwanie obrazka po kliknięciu i przytrzymaniu myszką

    var obrazek = document.getElementById("obrazek");

    obrazek.onmousedown = function()
    {
        var self = this;
        document.onmousemove = function(e)
        {
            movingImage(e, self);
        };
    };
    
    obrazek.onmouseup = function()
    {
        document.onmousemove = null;
    };

    obrazek.ondragstart = function(e)
    {
        e.preventDefault();
    }
};

