var dia = 'martes';

if(dia === 'lunes'){
    console.log('monday');
}else if(dia === 'martes'){
    console.log('tuesday');
}else if (dia === 'miercoles'){
    console.log('wednesday');
}else if (dia === 'jueves'){
    console.log('thursday');
}else if (dia ==='viernes'){
    console.log('friday');
}else if(dia === 'sabado'){
    console.log('saturday');
}else if (dia === 'domingo'){
    console.log('sunday');
}else{
    console.log('no ingreso ningun dia de la semana');
}

/**
 * switch
 */

var dia = 'jueves';

switch(dia){
    case 'lunes':
        console.log('monday');
        break;
    case 'martes':
        console.log('tuesday');
        break;
    case 'miercoles':
        console.log('wednesday'); 
        break;
    case 'jueves':
        console.log('thursday');
        break;
    case 'viernes':
        console.log('friday');
        break;
    case 'sabado':
        console.log('saturday');
        break;
    case 'domingo':
        console.log('sunday');
        break;  
    default:
        console.log('no ingreso ningun dia de la semana');
}

/**
 * 
 * ejercicio dos
 */

var total = 53 ;
var final;
if(total<=10){
    final = total + 3;
    console.log(final);
}else if(total>10 && total<=20){
    final = total + 5;
    console.log(final);
}else if(total>20 && total<=50){
    final = total + 7;
    console.log(final);
}else if(total>50){
    final = total ;
    console.log(final);
}else {
    console.log('ingrese el monto de la compra');
}



var total = 51;
var final;

switch(true){
    case total<=10:
        final = total + 3;
    console.log(final);
        break;
    case total>10 && total<=20:
        final = total + 5;
    console.log(final);
        break;
    case total>20 && total<=50:
        final = total + 7;
    console.log(final);
        break;
    case total>50:
        final = total ;
    console.log(final);
        break;
}
// https://www.jasoft.org/Blog/post/Uso-de-condiciones-complejas-en-instrucciones-switch-de-JavaScript-(y-otros-lenguajes)