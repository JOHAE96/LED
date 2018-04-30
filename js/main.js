var interval_color;

    function led_start() {
        clearInterval(interval_color);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {                
                change_red();
                change_blue();
                change_green();
            }
        };
        xhttp.open("GET", "./php/led.php?start_led=true", true);
        xhttp.send();
    }
    
    function change_red(){
        clearInterval(interval_color);
        var xhttp = new XMLHttpRequest();      
        xhttp.onreadystatechange = function() {
             if (xhttp.readyState == 4 && xhttp.status == 200) {
                set_color_preview();
             }
        };
        xhttp.open("GET", "./php/led.php?change_red=" + document.getElementById("red").value, true);
        xhttp.send();
    }
    
    function change_blue(){
        clearInterval(interval_color);
        var xhttp = new XMLHttpRequest();   
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                set_color_preview();
             }
        };
        xhttp.open("GET", "./php/led.php?change_blue=" + document.getElementById("blue").value, true);
        xhttp.send();
    }
    
    function change_green(){
        clearInterval(interval_color);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                set_color_preview();
             }
        };
        xhttp.open("GET", "./php/led.php?change_green=" + document.getElementById("green").value, true);
        xhttp.send();
    }
    
    function set_color_preview(){
        var red = document.getElementById("red").value;
        var blue = document.getElementById("blue").value;
        var green = document.getElementById("green").value;
        document.getElementById("actual_color").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")";
    }
    
var interval_color;

    function led_start() {
        clearInterval(interval_color);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {                
                change_red();
                change_blue();
                change_green();
            }
        };
        xhttp.open("GET", "./php/led.php?start_led=true", true);
        xhttp.send();
    }
    
    function change_red(){
        clearInterval(interval_color);
        var xhttp = new XMLHttpRequest();      
        xhttp.onreadystatechange = function() {
             if (xhttp.readyState == 4 && xhttp.status == 200) {
                set_color_preview();
             }
        };
        xhttp.open("GET", "./php/led.php?change_red=" + document.getElementById("red").value, true);
        xhttp.send();
    }
    
    function change_blue(){
        clearInterval(interval_color);
        var xhttp = new XMLHttpRequest();   
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                set_color_preview();
             }
        };
        xhttp.open("GET", "./php/led.php?change_blue=" + document.getElementById("blue").value, true);
        xhttp.send();
    }
    
    function change_green(){
        clearInterval(interval_color);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                set_color_preview();
             }
        };
        xhttp.open("GET", "./php/led.php?change_green=" + document.getElementById("green").value, true);
        xhttp.send();
    }
    
    function set_color_preview(){
        var red = document.getElementById("red").value;
        var blue = document.getElementById("blue").value;
        var green = document.getElementById("green").value;
        document.getElementById("actual_color").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")";
    }
    

