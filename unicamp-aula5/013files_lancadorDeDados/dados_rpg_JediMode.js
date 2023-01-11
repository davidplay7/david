var lancamentos = 0;

//d4
function lancarD4() {
	lancamentos++;
   d4Lancamento = parseInt(document.formDados.d4Num.value, 10);  
   d4Modificador = parseInt(document.formDados.d4Mod.value, 10);  
   dTotal = "";
   d4Res = 0;
   rTotal = document.formDados.RelatorioDeResultados.value; 
	for (r=0; r<d4Lancamento; r++) {
       var d4 = Math.floor((Math.random() * 4) + 1);	
       d4Res = d4Res + d4;	
	   dTotal = dTotal + d4.toString() + ", "	
  	}
	dTotal = lancamentos + "ª Rodada de Lançamento\n" +d4Lancamento + "d4\n" + dTotal + " + (" + d4Modificador + ")\n" + "Total: " + (d4Res+d4Modificador);	
   document.formDados.d4r.value = d4Res+d4Modificador;	
   rTotal = dTotal + "\n\n" + rTotal;  
   document.formDados.RelatorioDeResultados.value = rTotal;	
}



//d6
function lancarD6() {
	lancamentos++
   d6Lancamento = parseInt(document.formDados.d6Num.value, 10);  
   d6Modificador = parseInt(document.formDados.d6Mod.value, 10);  
   dTotal = "";
   d6Res = 0;
   rTotal = document.formDados.RelatorioDeResultados.value; 
	for (r=0; r<d6Lancamento; r++) {
       var d6 = Math.floor((Math.random() * 6) + 1);	
       d6Res = d6Res + d6;	
	   dTotal = dTotal + d6.toString() + ", "	
  	}
	dTotal = lancamentos + "ª Rodada de Lançamento\n" +d6Lancamento + "d6\n" + dTotal + " + (" + d6Modificador + ")\n" + "Total: " + (d6Res+d6Modificador);	
   document.formDados.d6r.value = d6Res+d6Modificador;	
   rTotal = dTotal + "\n\n" + rTotal;  
   document.formDados.RelatorioDeResultados.value = rTotal;	
}



//d8
function lancarD8() {
	lancamentos++
   d8Lancamento = parseInt(document.formDados.d8Num.value, 10);  
   d8Modificador = parseInt(document.formDados.d8Mod.value, 10);  
   dTotal = "";
   d8Res = 0;
   rTotal = document.formDados.RelatorioDeResultados.value; 
	for (r=0; r<d8Lancamento; r++) {
       var d8 = Math.floor((Math.random() * 8) + 1);	
       d8Res = d8Res + d8;	
	   dTotal = dTotal + d8.toString() + ", "	
  	}
	dTotal = lancamentos + "ª Rodada de Lançamento\n" +d8Lancamento + "d8\n" + dTotal + " + (" + d8Modificador + ")\n" + "Total: " + (d8Res+d8Modificador);	
   document.formDados.d8r.value = d8Res+d8Modificador;	
   rTotal = dTotal + "\n\n" + rTotal;  
   document.formDados.RelatorioDeResultados.value = rTotal;	
}



//d10
function lancarD10() {
	lancamentos++
   d10Lancamento = parseInt(document.formDados.d10Num.value, 10);  
   d10Modificador = parseInt(document.formDados.d10Mod.value, 10);  
   dTotal = "";
   d10Res = 0;
   rTotal = document.formDados.RelatorioDeResultados.value; 
	for (r=0; r<d10Lancamento; r++) {
       var d10 = Math.floor((Math.random() * 10) + 1);	
       d10Res = d10Res + d10;	
	   dTotal = dTotal + d10.toString() + ", "	
  	}
	dTotal = lancamentos + "ª Rodada de Lançamento\n" +d10Lancamento + "d10\n" + dTotal + " + (" + d10Modificador + ")\n" + "Total: " + (d10Res+d10Modificador);	
   document.formDados.d10r.value = d10Res+d10Modificador;	
   rTotal = dTotal + "\n\n" + rTotal;  
   document.formDados.RelatorioDeResultados.value = rTotal;	
}



//d12
function lancarD12() {
	lancamentos++
   d12Lancamento = parseInt(document.formDados.d12Num.value, 10);  
   d12Modificador = parseInt(document.formDados.d12Mod.value, 10);  
   dTotal = "";
   d12Res = 0;
   rTotal = document.formDados.RelatorioDeResultados.value; 
	for (r=0; r<d12Lancamento; r++) {
       var d12 = Math.floor((Math.random() * 12) + 1);	
       d12Res = d12Res + d12;	
	   dTotal = dTotal + d12.toString() + ", "	
  	}
	dTotal = lancamentos + "ª Rodada de Lançamento\n" +d12Lancamento + "d12\n" + dTotal + " + (" + d12Modificador + ")\n" + "Total: " + (d12Res+d12Modificador);	
   document.formDados.d12r.value = d12Res+d12Modificador;	
   rTotal = dTotal + "\n\n" + rTotal;  
   document.formDados.RelatorioDeResultados.value = rTotal;	
}




//d20
function lancarD20() {
	lancamentos++
   d20Lancamento = parseInt(document.formDados.d20Num.value, 10);  
   d20Modificador = parseInt(document.formDados.d20Mod.value, 10);  
   dTotal = "";
   d20Res = 0;
   rTotal = document.formDados.RelatorioDeResultados.value; 
	for (r=0; r<d20Lancamento; r++) {
       var d20 = Math.floor((Math.random() * 20) + 1);	
       d20Res = d20Res + d20;	
	   dTotal = dTotal + d20.toString() + ", "	
  	}
	dTotal = lancamentos + "ª Rodada de Lançamento\n" +d20Lancamento + "d20\n" + dTotal + " + (" + d20Modificador + ")\n" + "Total: " + (d20Res+d20Modificador);	
   document.formDados.d20r.value = d20Res+d20Modificador;	
   rTotal = dTotal + "\n\n" + rTotal;  
   document.formDados.RelatorioDeResultados.value = rTotal;	
}



//d100
function lancarD100() {
	lancamentos++
  	d100Lancamento = parseInt(document.formDados.d100Num.value, 10);  
  	d100Modificador = parseInt(document.formDados.d100Mod.value, 10);  
  	dTotal = "";
  	d100Res = 0;
  	rTotal = document.formDados.RelatorioDeResultados.value; 
	for (r=0; r<d100Lancamento; r++) {
       var d100 = Math.floor((Math.random() * 100) + 1);
       d100Res = d100Res + d100;	
	   dTotal = dTotal + d100.toString() + ", "	
  	}
	dTotal = lancamentos + "ª Rodada de Lançamento\n" + d100Lancamento + "d100\n" + dTotal + " + (" + d100Modificador + ")\n" + "Total: " + (d100Res+d100Modificador);	
   document.formDados.d100r.value = d100Res+d100Modificador;	
   rTotal = dTotal + "\n\n" + rTotal;  
   document.formDados.RelatorioDeResultados.value = rTotal;	
}