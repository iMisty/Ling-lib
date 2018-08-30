function Ajax(){
	var xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.open("GET","test.php",true);
	xmlHttpRequest.onreadystatechange = RequestCallBack();
	xmlHttpRequest.send(null);

	function RequestCallBack(){
		if(xmlHttpRequest.readyState == 4){
			if(xmlHttpRequest.status == 200){
				document.getElementById("resText").innerHTML = xmlHttpRequest.responseText;
			}
		}
	}
}