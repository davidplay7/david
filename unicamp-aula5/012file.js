// JavaScript Document

//VARIAVEIS
var num = 0;
var tempo = setInterval(
						function(){
							num++;
							document.getElementById('tela').innerHTML = num;
							if (num==10){
							clearInterval(tempo)
								}
							},
						1000
						);
//

