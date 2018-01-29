var grabGrid = $('#grido');

// kwadracik :)

var cube = $('<div class="qubis" />');

// tworzenie siatki

// klikaj przycisk

$('input[type=submit]').click(makeGrid);

var height = $('#inputHeight');

var width = $('#inputWeight');


function makeGrid() {
    for (var x = 0; x < height.val(); x++) {
    for (var y = 0; y < width.val(); y++) {
        $cube = $('<div class="qubis" />');
        $('#grido').append($cube);
    }
    $('#grido').last().append('<br>');
};
}
$('form').submit(function(event) {
    event.preventDefault();
})
