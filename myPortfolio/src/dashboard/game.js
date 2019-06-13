$(document).ready(function(){
    //getting screen resolution and positioning the start button
let width = screen.width - 80;
let height = screen.height - 100;
let code = 0;
$('#startBox').css({ "top" : (height/2) + 'px', "left" : (width/2) + 'px'});

$('#startBox').click( function(){
    $(this).fadeOut('slow');
    $('#scoreBox').show();
    genLetter();
});

//Matching key events and fading out the corresponding balloon
$(document).keydown( function(event) {
    let keycode = event.keyCode;
    $('.balloon' + keycode).animate({ "top" : height + "px", "opacity" : 0 }, 'slow');
    $('.balloon' + keycode).fadeOut('slow').hide( 'slow', function(){
        code += 20;
        $('#scoreBox').html(code);
        $(this).remove();
    });
});

//I want to use random letters within the balloons to target, so I need to generate these letters
function generateLetter(){
    let color = randomColor();
    let k = Math.floor(Math.random() * (90 - 65 + 10)) + 33;
    let ch = String.fromCharCode(k);
    let top = Math.floor( Math.random() * height);
    let left = Math.floor( Math.random() * width);
    $('#gameTime').append('<p class = "balloon' + k + '" style="left: ' + left +'; top: '+ top +'; background-color:' + color + '">' + ch + '</p>');
    setTimeout(generateLetter, 1000);
}

//in the above function, I am telling JavaScript to locate the div id "gameTime" and append a <p> element inside. The </p> will contain my styling CSS code within the HTML. Because I'm using random values for variables left, top, k, color, and ch, my balloons should pop up in random spots with random styling. I set a math.floor so that I will only get whole numbers. Keyboard characters do not contain decimals and correspond to a number. ex)  w = 119;

//I also want random colors in each balloon

function generateColor(){
    let color = '';
    let values = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (c = 0; c < 6; c++) {
        no = Math.floor(Math.random() * 15);
        color += values[no];
    }
    return color;
}
});