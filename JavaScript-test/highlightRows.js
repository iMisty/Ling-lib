function highlightRows(){
	if(!document.getElementByTagName) return false;
	var rows = document.getElementByTagName("tr");
	for(var i = 0;i < rows.length;i++){
		rows[i].mouseover = function(){
			this.style.fontWidght = "bold";
		}
		rows[i].mouseout = function(){
			this.style.fontWidght = "normal";
		}
	}
}

/*
*Another rule
*tr:hover{
*	font-widght = bold;	
*}
*/