document.getElementById("header").innerHTML=
"<ul class=\"menu\">\
	<li>\
		<a href=\"index.jsp\">Hello</a>\
	</li>\
	<li>\
		<a href=\"Messages\">Messages</a>\
	</li>\
	<li>\
		<a href=\"about.html\">About</a>\
	</li>\
</ul>";

function startTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('footer').innerHTML="Time: "+h+":"+m+":"+s;
	t=setTimeout(function(){startTime()},500);
}
function checkTime(i){
	if(i<10){
		i="0"+i;
	}
	return i;
}
startTime();