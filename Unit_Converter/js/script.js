
function kilometers(entryValue)
{
    return entryValue.value * 1000;
};

function meters(entryValue)
{
    return entryValue.value * 100;
};

function optionChosen(units)
{
    var unitChosen = units.onchange = function()
    {
        units.options[units.selectedIndex].value;
    }
    return unitChosen;
};
    
    var entryValue = document.getElementById("entryValue");
    var convertedValue = document.getElementById("convertedValue");

    var units = document.getElementById("units");

    var converterButton = document.getElementById("converterButton");

    converterButton.onclick = function() 
    {  
        if (unitChosen == 0)
            convertedValue.innerText = kilometers(entryValue) + " cm";
        else if (unitChosen == 1)
        {
            convertedValue.innerText = meters(entryValue) + " cm";
        }
    };

