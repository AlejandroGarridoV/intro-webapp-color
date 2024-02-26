$(document).ready(function() {
    updateColor();

    // Evento de cambio en el color picker
    $('#colorPicker').on('input', function() {
        var color = $(this).val();
        var rgb = hexToRgb(color);

        // Actualizar las cajas de texto y los controles deslizantes
        $('#redInput').val(rgb.r);
        $('#redRange').val(rgb.r);
        $('#greenInput').val(rgb.g);
        $('#greenRange').val(rgb.g);
        $('#blueInput').val(rgb.b);
        $('#blueRange').val(rgb.b);

        updateColor();
    });

    // Eventos de cambio en las cajas de texto
    $('input[type="number"]').on('input', function() {
        var redValue = parseInt($('#redInput').val());
        var greenValue = parseInt($('#greenInput').val());
        var blueValue = parseInt($('#blueInput').val());

        // Actualizar los controles deslizantes
        $('#redRange').val(redValue);
        $('#greenRange').val(greenValue);
        $('#blueRange').val(blueValue);

        updateColor();
    });

    // Eventos de cambio en los controles deslizantes
    $('input[type="range"]').on('input', function() {
        var redValue = $('#redRange').val();
        var greenValue = $('#greenRange').val();
        var blueValue = $('#blueRange').val();

        // Actualizar las cajas de texto
        $('#redInput').val(redValue);
        $('#greenInput').val(greenValue);
        $('#blueInput').val(blueValue);

        updateColor();
    });
});

function updateColor() {
    var redValue = parseInt($('#redInput').val());
    var greenValue = parseInt($('#greenInput').val());
    var blueValue = parseInt($('#blueInput').val());

    // Limitar los valores a 0-255
    redValue = Math.min(255, Math.max(0, redValue));
    greenValue = Math.min(255, Math.max(0, greenValue));
    blueValue = Math.min(255, Math.max(0, blueValue));

    var rgbColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
    var hexCode = rgbToHex(redValue, greenValue, blueValue);

    $('#colorPreview').css('background-color', rgbColor);
    $('#hexCode').text(hexCode);
}

function rgbToHex(r, g, b) {
    var redHex = r.toString(16).padStart(2, '0');
    var greenHex = g.toString(16).padStart(2, '0');
    var blueHex = b.toString(16).padStart(2, '0');
    return '#' + redHex + greenHex + blueHex;
}

function hexToRgb(hex) {
    // Eliminar el símbolo '#' si está presente
    hex = hex.replace(/^#/, '');

    // Convertir el valor hexadecimal a RGB
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return { r: r, g: g, b: b };
}
