
function main(){
var input = document.getElementById("inputColor");
  var color = input.value;
var toLowerCase = color.toLocaleLowerCase();
// GrÜn Grün GRÜN GrüN grün = immer grün

if (lowerColorName == "grün"){
  alert("du darfst fahren");

}

else if(lowerColorName == "orange"){
  alert("Du darfst anfahren oder musst bremsen");
}

else if(lowerColorName == "rot"){
  alert("Du musst bremsen");
}

else{
 alert("keine gültige Ampel-farbe eingetragen");
}
}
//wenn grün dann fahren
// wenn gelb dann anfahren/bremsen
// wenn rot dann stehen bleiben
// wenn anderer farben dann fehlermeldung zurückgeben
