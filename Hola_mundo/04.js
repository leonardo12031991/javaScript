'use strict'//condicion if

var edad1=30;
var edad2 =30;
var nombre= "luis";


if (edad1 => edad2  ) {
    console.log("edad uno es mayor que edad 2");
}else {
    console.log("LA EDAD ES MENOR");
}
//operadores logicos
 var edad =75 ;
 var imprime="";

 switch (edad) {
     case 18:
         imprime="acabas de cumplir 18"; 
         break;
         case 25:
         imprime="ya tienes 25"; 
         break;case 40:
         imprime="ahora tienes 40"; 
         break;
         case 75:
         imprime="eres un anciano"; 
         break;
 
     default: imprime="tu edad es neutra";
         break;
 }

 console.log(imprime);

 //bucle for
var numero =100;

for (var i = 0; i  <= numero; i++){

console.log("el numero es:"+i)

};