<?php
$gpio_red = "17"; //GPIO Pin Nummer für Rot
$gpio_green = "22"; //GPIO Pin Nummer für Grün
$gpio_blue = "27"; //GPIO Pin Nummer für Blau

    if(isset($_GET["start_led"])){
        if($_GET["start_led"] == true){
            @shell_exec("sudo pigpiod"); //PIGPIO starten und initialisieren
        }
    }
    
    if(isset($_GET["change_red"])){
        @shell_exec("pigs p " . $gpio_red . " " . $_GET["change_red"]); //Wert (Helligkeit) für Rot setzen
    }
    
    if(isset($_GET["change_green"])){
        @shell_exec("pigs p " . $gpio_green . " " . $_GET["change_green"]); //Wert (Helligkeit) für Grün setzen
    }
    
   if(isset($_GET["change_blue"])){
        @shell_exec("pigs p " . $gpio_blue . " " . $_GET["change_blue"]); //Wert (Helligkeit) für Blau setzen
    }
?>
