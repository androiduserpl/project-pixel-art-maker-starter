var grabGrid = $('#grido');

// kwadracik :)

var cube = $('<div class="qubis" />');

// tworzenie siatki

// klikaj przycisk

$('#push').click(makeGrid);

var height = 10

var width = 15


function makeGrid() {
    for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 10; y++) {
        $cube = $('<div class="qubis" />');
        $('#grido').append($cube);
    }
    $('#grido').last().append('<br>');
};
}