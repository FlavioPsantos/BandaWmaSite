
function verificaDados(){
	
   	criarElementos("table","tabelaface","","","body");
   	criarElementos("tr","trCabecalho","","","tabelaface");
   	criarElementos("td","tdCabecalho","","Confira os dados","trCabecalho");
   	document.getElementById("tdCabecalho").setAttribute("colspan","2");
   	criarElementos("tr","trNome","","","tabelaface");
   	criarElementos("td","tdNome","","Nome","trNome");
    criarElementos("td","tdInputNome","",document.getElementById("inputNome").value,"trNome");
    criarElementos("tr","trEmail","","","tabelaface");
   	criarElementos("td","tdEmail","","E-mail","trEmail");
   	criarElementos("td","","",document.getElementById("inputEmail").value,"trEmail");
   	criarElementos("tr","trCidade","","","tabelaface");
   	criarElementos("td","tdCidade","","Cidade ","trCidade");
   	criarElementos("td","","",document.getElementById("inputCity").value,"trCidade");
   	criarElementos("tr","trEstado","","","tabelaface");
   	criarElementos("td","tdEstado","","Estado ","trEstado");
   	criarElementos("td","","",document.getElementById("inputEstado").value,"trEstado");
    criarElementos("tr","trAgendamento","","","tabelaface");
   	criarElementos("td","tdAgendamento","","","trAgendamento");
   	criarElementos("td","","",document.getElementById("inputAgendamento").value,"trAgendamento");
   	criarElementos("tr","trConfirma","","","tabelaface");
   	criarElementos("td","tdConfirma","","","trConfirma");
	criarElementos("input","inputConfirma","","","tdConfirma");
   	document.getElementById("inputConfirma").setAttribute("type","button");
   	document.getElementById("inputConfirma").setAttribute("value","Confirma");
    document.getElementById("inputConfirma").setAttribute("onclick","confirma()");
   	criarElementos("td","tdCancela","","","trConfirma");
    criarElementos("input","inputCancela","","Cancelar","tdCancela");
	document.getElementById("inputCancela").setAttribute("type","button");
   	document.getElementById("inputCancela").setAttribute("value","Cancela");
   	document.getElementById("inputCancela").setAttribute("onclick","removeElementos()");
	
	
}
function confirma(){
   alert('Dados gravados com sucesso!');
   window.location.reload();
}
function criarElementos(elemento,id,classe,texto,elementoPai){
	var novoElemento = document.createElement(elemento);
	novoElemento.id = id;
	if (classe!="")
		novoElemento.className=classe;
	if (texto!="")
		novoElemento.innerHTML = texto;
	if (elementoPai=="body")
		document.body.appendChild(novoElemento);
	else
		document.getElementById(elementoPai).appendChild(novoElemento);
}
function removeElementos(id){
	var elemento = document.getElementById(id);
	if (elemento != null){
		elemento.parentNode.removeChild(elemento);
	}
	
   }
	

