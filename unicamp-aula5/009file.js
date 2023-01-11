// JavaScript Document
//definindo as minhas variaveis
var padrao = 18;
var incremento = 0;

//functions
function contraste(){
var cor = ["#000","#CCC","#CFC","#FA4"];
var letra = ["#FFF","#000","#000","#02C"];
//
incremento++;
//limitador
if (incremento > cor.length){
incremento = 0;
}
//document.write(cor);
document.getElementById("fundo").style.backgroundColor = cor[incremento];
document.getElementById("texto").style.color = letra[incremento];
//
/*
if (incremento == 0){
document.getElementById("texto").style.color = "#FFF";
}else{
document.getElementById("texto").style.color = "#000";
}
*/
//
};

function tamFonte(contador){
if (contador == 18){
padrao = contador;
}else{
padrao += contador;
}
//
if (padrao >= 81){
//alert("tamanho alcancado");
padrao = 81;
}else if(padrao < 9){
padrao = 9;
}
//
document.getElementById("texto").style.fontSize = padrao + "px";
}
