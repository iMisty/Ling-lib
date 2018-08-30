
var request = getHTTPObject();
//檢測IE兼容性
function getHTTPObject(){
	if(typeof XMLHttpRequest == "undefined")
		XMLHttpRequest = function(){
			try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
				catch(e){}
			try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
				catch(e){}
			try{return new ActiveXObject("Msxml2.XMLHTTP");}
				catch(e){}
			return false;
		}
	return new XMLHttpRequest();
}

function getNewContent(){
	var request = getHTTPObject();
	if(request){
		//頁面加載完成後發起GET請求，請求於HTML文件處於同一目錄的example.txt
		request.open("GET","example.txt",true);
		//指定事件處理函數
		request.onreadystatechange = function(){
			//處理函數過程
			if(request.readystate == 4){
				alert("Response Received");
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		//指定完請求目標，也明確如何處理響應後就可以用send方法發送請求
		request.send(null);
	}else{
		alert('Sorry,your browser dosn\'t support XMLHttpRequest');
	}
	alert("Function Done");
}
addLoadEvent(getNewContent);