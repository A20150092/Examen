var nom = prompt ("Ingrese su nombre y apellido  ");
var correct = 0;
var incorrect = 0;
alert ("Bienvenido  " + nom);
var res1 = prompt("¿Cuánta agua hay en la Tierra? \nA:Alrededor de un 41% de la superficie terrestre es agua \nB: Alrededor de un 51% de la superficie terrestre es agua \nC:Alrededor de un 71% de la superficie terrestre es agua")
if (res1=="C") {
    res1= 1;
}else{

    res1=0
}

var res2 = prompt("¿Qué océano es el más grande? \nA:El Pacífico \nB: El Atlántico \nC:El Índico")
if (res2=="A") {
    res2= 1;
}else{

    res2=0
}

var res3 = prompt("¿Cuánto mide la parte más profunda de los Océanos? \nA:11 Km \nB: 23 Km \nC:31 Km")
if (res3=="A") {
    res3= 1;
}else{

    res3=0
}

var result = res1+ res2 + res3

if (result<=3){
    document.write("Lo hiciste bien " +nom);
}else{
    document.write(" Vuelve a intentarlo " + nom )
}