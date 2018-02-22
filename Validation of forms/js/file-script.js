$.fn.styleFile = function (options) {
    options = $.extend({
        btnClass: ''
    }, options);

    return this.each(function () {
        styleFile = function ($element) {
            var classList = '';
            if ($element.attr('class') != undefined) {
                classList = $element.attr('class');
                $element.attr('class', '');
            }

            var labelText = ($element.attr('title') != '' && $element.attr('title') != undefined) ? $element.attr('title') : 'Wybierz';
            var $container = $('<div class="file-cnt" />');
            var $textFile = $('<span class="text">' + $element.val() + '</span>');
            var $inputFileWrapper = $('<div class="input-file ' + options.btnClass + '"><span>' + labelText + '</span></div>');

            $container.append($inputFileWrapper).append($textFile);
            $element.replaceWith($container);
            $container.find('.input-file').append($element);
            $element.css({ 'font-size': 1000, opacity: 0 });

            $element.on('change click', function () {
                var $this = $(this);
                $this.parent().parent().find('.text').text($this.val());
            });

            var oldClassList = classList.split(' ');
            $.each(oldClassList, function (k) {
                $container.addClass(oldClassList[k]);
            });
            if ($element.prop('disabled')) {
                $container.addClass('disabled');
            }
            $element.addClass('styled');
        };

        var disableStyledElement = function () {
            var $this = $(this);
            var $parent = $this.closest('.file-cnt')
            $this.attr('disabled', 'disabled');
            if ($parent.hasClass('styled')) $parent.addClass('disabled');
        };

        var enableStyledElement = function () {
            var $this = $(this);
            var $parent = $this.closest('.file-cnt')
            $this.removeAttr('disabled');
            $parent.removeClass('disabled');
        };

        var $this = $(this);

        if ($this.is(':file')) styleFile($this);

        $this.on({
            'disable': disableStyledElement,
            'enable': enableStyledElement
        })

    });
}; /* styleFormElements */

$(function () {
    $(':file').styleFile();
});

// Na początku pobieramy klasy, które :file może mieć przypisane.Po pobraniu przeniesiemy je do .file-cnt. Następnie tworzymy elementy, którymi okryjemy :file.
// Musimy jeszcze podpiać zdarzenie click. Po wybraniu pliku, wartość :file pobieramy i przenosimy do elementu.text.
// Dodatkowo na końcu dodajemy do naszego nowo utworzonego elementu dwie metody: enable i disable, które w przyszłości w razie czego włączą lub wyłączą nasz element.
// Element :file jest teraz ukryty (opacity: 0), więc dodanie mu właściwości: disabled nie zmieni wyglądu naszej kontrolki.
// Dlatego aby wyłaczyć naszą kontrolkę będziemy musieli skorzytać z kodu:

//     $('#superStyledInput').trigger('enable'); //włączenie wyłączonego :file
//     $('#superStyledInput').trigger('disable'); //wyłączenie włączonego :file