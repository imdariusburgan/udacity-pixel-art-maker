// HTML table element
const gridTable = $('#pixel_canvas');

// When size is submitted by the user, call makeGrid()
$('input:submit').click(function(event){
  event.preventDefault();
  makeGrid();
});

// makeGrid Function
function makeGrid() {
  gridTable.empty();
  let gridHeight = document.getElementById("input_height").value;
  let gridWidth = document.getElementById("input_width").value;
  for (var r = 0; r < gridHeight; r ++ ) {
    gridTable.append('<tr class="' + r + '">', '</tr>');
    for (var c = 0; c < gridWidth; c ++) {
      $('.' + r).append('<td>', '</td>');
    }
  }
};

// Add or remove background color to click table cell
gridTable.on("click", "td", function() {
  const colorInput = document.getElementById("colorPicker").value;
  if($(this).hasClass('clicked')) {
    $(this).removeAttr('style');
    $(this).removeClass('clicked');
  } else {
    $(this).css("background-color", colorInput);
    $(this).addClass('clicked');
  }
});
