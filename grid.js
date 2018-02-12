//--== Pixel Art Project ==-- 
//for Udacity Google Developer Challenge Scholarship: Front-End Web 
//androiduserpl
//ver 1.0


/* some virabe */
var table = $('#pixelCanvas');
var colorPicker = $('#colorPicker');

/* size of the grid */

var height = $('#inputHeight');
var width = $('#inputWeight');

/* make a grig */

function makeGrid() {
    for (var h = 0; h < height.val(); h++) {
        table.append("<tr></tr>");
        for (var w = 0; w < width.val(); w++) {
            table.children().last().append("<td></td>");
        }
    }
}

/* make grid button */

$('form').submit(function (e) {
    table.empty();
    e.preventDefault();
    makeGrid();
});

/* giv a color to the grid */

/* click for color */
table.on("click", "td", function () {
    $(this).css("background-color", colorPicker.val());
});
/* erase color from the single squere */
table.on("dblclick", "td", function () {
    $(this).css("background-color", "#fff");
});


