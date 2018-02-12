//pobierz wartość i wpisz ją w stronę

$('#input').on('change', function() {
    var val;
    val = $('#input').val();
    var header;
    header = $('.articles h1').text(val);
    
});