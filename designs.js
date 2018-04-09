// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    console.log(height);
    console.log(width);
    makeGrid(height, width);
});


function makeGrid(h, y) {
    //reset grid
    $('tr').remove();
    for (var i = 1; i<= h; i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>')
    }
}
