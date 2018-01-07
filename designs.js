// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//define variables
var mouseDown = false;

$(document.body)
    .on("mousedown", function(){
    mouseDown=true;
    })
    .on("mouseup", function(){
    mouseDown=false;
    });


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
//to scale down from 1 cell = 36px to 1 cell =13px in case of the max of 60x60 number of cells    
    var rowcol = rows*columns;
    var power= Math.pow(0.99972, rowcol);
    var side= (36 * power)+"px";
    $("td").remove();
    $("tr").remove();
    for(var i =1; i<=rows; i++){
        canvas.append("<tr></tr>");
        for(var j=1; j<=columns; j++){
            $("#pixel_canvas tr:last").append("<td class='cell bgwhite'></td>");
            
  }
        $("tr").height(side);
        $("td").width(side);
  }
    
    
};

var eraser = false;
$(".eraser").on("click", function(){
    if($(this).hasClass("eraseoff")){
        eraser=true;
        $(".eraser").removeClass("eraseoff");
        $(".eraser").addClass("eraseon");
    } else{
        eraser=false;
        $(".eraser").removeClass("eraseon");
        $(".eraser").addClass("eraseoff");
        //$("#eraser").removeClass("eraseoff");
    }
});

$("#pixel_canvas").on("click", "td", function(){
    var colorPicked=$("#colorPicker").val();
    if(eraser==false){
        if($(this).hasClass("bgwhite")){
            $(this).removeClass("bgwhite");
            $(this).addClass("hasColor");
            $(this).css("background-color", colorPicked);
        }else if($(this).hasClass("hasColor")){
            $(this).css("background-color", colorPicked);
        }
    }else{
        $(this).addClass("bgwhite");
        $(this).css("background-color", "white");
    }
});

$("#pixel_canvas").on("mouseover", "td", function(){
    var colorPicked=$("#colorPicker").val();
    if(mouseDown){
    if($(this).hasClass("bgwhite")){
        $(this).removeClass("bgwhite");
        $(this).addClass("hasColor");
        $(this).css("background-color", colorPicked);
    }else if($(this).hasClass("hasColor") && eraser==false){
        $(this).css("background-color", colorPicked);
    }else{
        $(this).addClass("bgwhite");
        $(this).css("background-color", "white");
    }
    }
});


/*function paint(){


}
*/