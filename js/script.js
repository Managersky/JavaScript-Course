
function stopWatch(uchwytStopera, daneStop)
{
    this.uchwytStopera = uchwytStopera;
    this.daneStop = daneStop;

    this.poczatkowaWartosc;
    this.timeOutReference = undefined;
    this.odpal = function (poczatkowaWartosc)
    {
        this.poczatkowaWartosc = poczatkowaWartosc;

        if (this.timeOutReference)
            this.zatrzymaj();

        this.startStoper();
    };

    this.startStoper = function()
    {
        if (this.poczatkowaWartosc < 0)
            return;
        this.uchwytStopera.innerHTML = this.poczatkowaWartosc--;

        var self = this;

        this.timeOutReference = setTimeout(function()
            {
                self.startStoper();
            }, 1000);
    };

    this.zatrzymaj = function ()
    {
        clearTimeout(this.timeOutReference);
        this.daneStop.innerHTML += this.uchwytStopera.innerHTML + " ";
    };

    this.kontynuuj = function()
    {
        this.startStoper();
    };

}


window.onload = function() 
{
    // Stoper obiektowo

    var btnStoperStart = document.getElementById("btnStoperStart");
    var btnStoperStop = document.getElementById("btnStoperStop");
    var btnStoperContinue = document.getElementById("btnStoperContinue");

    var uchwytStopera = document.getElementById("uchwytStopera");
    var daneStop = document.getElementById("daneStop");

    var stoper = new stopWatch(uchwytStopera, daneStop);

    btnStoperStart.onclick = function ()
    {
        var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value;
        stoper.odpal(poczatkowaWartosc);
    };

    btnStoperStop.onclick = function ()
    { 
        stoper.zatrzymaj();
    };

    btnStoperContinue.onclick = function()
    {
        stoper.kontynuuj();
    };
};

