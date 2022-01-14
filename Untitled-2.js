
var Tbl = document.getElementById("tbl")
var Inpt = document.getElementById("inpt")
var Btn = document.getElementById("btn")

var A = document.getElementById("A")
var B = document.getElementById("B")
var C = document.getElementById("C")
var D = document.getElementById("D")





function abid() {
     console.log("1");
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "http://api.weatherapi.com/v1/current.json?key=402bc9b7fe7448c6b60101433221201&q=%22%20+%20%22"+Inpt.value+"%22%20+%20%22&aqi=yes&fbclid=IwAR1Rg_46d-rkI6q-6L5FQv9_Nb8Ol_a262ML_vSjZwj9k_FDcLW37QXZ3C4%22", true);
xhttp.send();

xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
 let data =JSON.parse( xhttp.responseText);
 A.innerHTML=data.location.country;
 B.innerHTML=data.location.localtime;
 C.innerHTML=data.current.temp_c + "°C";
 D.innerHTML=data.current.wind_kph + "km/h" ;


 
 
 console.log(data);

    }

};
}



   
  





















































