
function kilometers(entryValue)
{
    return entryValue.value * 1000;
};

function meters(entryValue)
{
    return entryValue.value * 100;
};

function optionChosen()
{
    var units = document.getElementById("units");
    return units.options[units.selectedIndex].innerHTML;
};
    
    var entryValue = document.getElementById("entryValue");
    var convertedValue = document.getElementById("convertedValue");

    var converterButton = document.getElementById("converterButton");
 
    converterButton.onclick = function() 
    {  
        if (optionChosen() == "km")
        {
            convertedValue.innerHTML = kilometers(entryValue) + " cm";
        }
        else if (optionChosen() == "m")
        {
            convertedValue.innerHTML = meters(entryValue) + " cm";
        }
    };

