function isNumber(valueToCheck)
{
    return !isNaN(valueToCheck);
}

window.onload = function()
{
    var poleLiczbowe = document.getElementById("myForm").poleLiczbowe; //.elements[0]
    var poleTekstowe = document.getElementById("myForm").poleTekstowe; //.elements[1]
    var submitMyForm = document.getElementById("myForm").submitMyForm; //.elements[2]

    var info = document.getElementById("info");

    var isEverythingOK = true;

    poleLiczbowe.onkeyup = function(e)
    {
        var wpisanyZnak = e.which;

        //if (!isNumber(String.fromCharCode(wpisanyZnak)))
        if (isNumber(this.value))
        {
            this.style.backgroundColor = "white";
            info.innerHTML = "";
            isEverythingOK = true;
        }
            
        else
        {
            this.style.backgroundColor = "white";
            info.innerHTML = "Wpisuj tylko liczby";
            isEverythingOK = false;
        }
            
        //info.innerHTML = String.fromCharCode(e.which);
        //info.innerHTML = e.which;
    };

    submitMyForm.onclick = function(e)
    {
        if (!isEverythingOK)
            e.preventDefault();
    };
};