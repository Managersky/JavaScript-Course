/*

arguments Object 

*/

function addNumbers() 
{   
    var suma = 0;
    
    /*for (i = 0; i < arguments.length; i++)
    {
        suma += arguments[i];
    }
    */

    for (var property in arguments)
    {
        suma += arguments[property];
    }
    return suma;
}

var suma = addNumbers(3,4,7,6,6);

alert(suma);