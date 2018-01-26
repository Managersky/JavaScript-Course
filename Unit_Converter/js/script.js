

/* Units */
function kilometers(entryValue)
{
    return entryValue.value * 1000;
};

function meters(entryValue)
{
    return entryValue.value * 100;
};

// Option choose
function optionChosen()
{
    var units = document.getElementById("units");
    return units.options[units.selectedIndex].innerHTML;
};

// is a Number?
function isNumber(valueToCheck)
{
    return !isNaN(valueToCheck);
}
    
    var entryValue = document.getElementById("entryValue");
    var convertedValue = document.getElementById("convertedValue");

    var converterButton = document.getElementById("converterButton");
 
    converterButton.onclick = function() 
    {  
        if (entryValue.value == 0)
        {
            alert("Fill label!");
        }
        else if (!isNumber(entryValue.value))
        {
            alert("This is not a number! Please write a number");
        }
        else
        {
            if (optionChosen() == "km") {
                convertedValue.innerHTML = kilometers(entryValue) + " cm";
            } else if (optionChosen() == "m") {
                convertedValue.innerHTML = meters(entryValue) + " cm";
            }
        }   
    };

