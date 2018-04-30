<?php
$gpio_red = "17"; //GPIO Pin Nummer für Rot
$gpio_green = "22"; //GPIO Pin Nummer für Grün
$gpio_blue = "27"; //GPIO Pin Nummer für Blau

$red = "rot";
$green = "gras";
$blue = "blau";
$white = "Licht";
$off = "aus";
$farbe = rot;
$farbe = htmlspecialchars($_GET["farbe"]);
echo $farbe;

if(strcasecmp($farbe, $red) == 0){
	@shell_exec("pigs p " . $gpio_red . " 255"); //Wert (Helligkeit) für Rot setzen
	@shell_exec("pigs p " . $gpio_green . " 0"); //Wert (Helligkeit) für Grün setzen
	@shell_exec("pigs p " . $gpio_blue . " 0"); //Wert (Helligkeit) für Blau setzen
	}

if(strcasecmp($farbe, $green) == 0){
	@shell_exec("pigs p " . $gpio_red . " 0"); //Wert (Helligkeit) für Rot setzen
	@shell_exec("pigs p " . $gpio_green . " 255"); //Wert (Helligkeit) für Grün setzen
	@shell_exec("pigs p " . $gpio_blue . " 0"); //Wert (Helligkeit) für Blau setzen
	}

if(strcasecmp($farbe, $blue) == 0){
	@shell_exec("pigs p " . $gpio_red . " 0"); //Wert (Helligkeit) für Rot setzen
	@shell_exec("pigs p " . $gpio_green . " 0"); //Wert (Helligkeit) für Grün setzen
	@shell_exec("pigs p " . $gpio_blue . " 255"); //Wert (Helligkeit) für Blau setzen
 	}

if(strcasecmp($farbe, $white) == 0){
	@shell_exec("pigs p " . $gpio_red . " 255"); //Wert (Helligkeit) für Rot setzen
	@shell_exec("pigs p " . $gpio_green . " 255"); //Wert (Helligkeit) für Grün setzen
	@shell_exec("pigs p " . $gpio_blue . " 255"); //Wert (Helligkeit) für Blau setzen
	}
if(strcasecmp($farbe, $off) == 0){
        @shell_exec("pigs p " . $gpio_red . " 0gree"); //Wert (Helligkeit) für Rot setzen
        @shell_exec("pigs p " . $gpio_green . " 0"); //Wert (Helligkeit) für Grün setzen
        @shell_exec("pigs p " . $gpio_blue . " 0"); //Wert (Helligkeit) für Blau setzen
    }

?>

