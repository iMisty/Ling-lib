function stripeTables(){
	if(!document.getElementByTagName) return false;
	var tables = document.getElementByTagName("table");
	var odd,rows;
	for(var i = 0;i < tables.length;i++){
		odd = false;
		rows = tables[i].getElementByTagName("tr");
		for(var j = 0;j < rows.length;j++){
			if(odd == true){
				//Your CSS
				//rows[j].style.backgroundColor = "#ffc";
			}else{
				odd = ture;
			}
		}
	}
}