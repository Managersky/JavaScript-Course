
function convert(entryValue) {
    this.entryValue = entryValue;


}

window.onload = function() 
{
    var entryValue = document.getElementById("entryValue");
    var convertedValue = document.getElementById("convertedValue");

    var converterButton = document.getElementById("converterButton");

    convert();

}