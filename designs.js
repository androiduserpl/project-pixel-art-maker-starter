// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!

}

var grabGrid = $('#grido');

var qubis = $('<div class="qubis" id="x" />');

// pobieranie z inputu wymiarów siatki

//var height = $('#inputHeight').val();

var height = $('#inputHeight').on('change', function() {
    var vall;
    vall = $('#inputHeight').val();
    var header;
    header = $('.inputHeight').val(vall);
});

var weight = $('#inputWeight').val();

/* tworzenie siatki*/
for (var x = 0; x < height  ; x++) {
    for (var y = 0; y < 10; y++) {
        $qubis = $('<div class="qubis" id="x" />');
        $('#grido').append($qubis);
    }
    $('#grido').last().append('</br>');
};

/*  ---    potem przydało by się nadać karzedemu kwadracikowi id
dobre by było petla for each   ----  */




//blokowanie praeładowania strony

$('form').submit(function(event){
    event.preventDefault();
})