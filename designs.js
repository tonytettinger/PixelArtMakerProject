// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//define variables

var pickedColor=$("#colorPicker").val();

//event listener for submit button which calls make grid function
$("#gridSubmit").on("click",function(event){
    event.preventDefault();
    makeGrid();
});
    
//to make the grid function. deletes previous grid
    
var makeGrid = function() {
    var rows= $("#input_height").val();
    var columns= $("#input_width").val();
    var canvas=$("#pixel_canvas");
    var rowcol = rows*columns;
    var power= Math.pow(0.99972, rowcol);
    var side= (30 * power)+"px";
    $("td").remove();
    $("tr").remove();
    alert(side);
    for(var i =1; i<=rows; i++){
        canvas.append("<tr></tr>");
        $("tr").height(side);
        for(var j=1; j<=columns; j++){
            $("#pixel_canvas tr:last").append("<td></td>");
            $("td").width(side);
  }
  }
    
    
};
    
/*function paint(){


}
*/