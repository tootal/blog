//By tootal
/*
	Created at 201901311823
*/
function alert_hello(){
	alert('hello world!');
}

function show_all_num(n){
	var str=new String;

	for(var i=1;i<=n;i++){
		str=str+i+"<br>";
	}

	document.getElementById("show_num").innerHTML=str;
}