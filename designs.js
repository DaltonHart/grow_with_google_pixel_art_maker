// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    makeGrid(height, width);
});


function makeGrid(h, w) {
    //reset grid
    $('tr').remove();
//for loop to take height and create a tr per loop needed
    for (var i = 1; i<= h; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        //for loop to take width and create a td per loop needed
        for (var j = 1; j <= w; j++){
            $('#table' + i).append('<td></td>');
        }
    }
    // add color to cell depending on selection
    $('td').click(function addcolor(){
        color = $('#colorPicker').val();

        if($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' +color);
        }
    })
}
