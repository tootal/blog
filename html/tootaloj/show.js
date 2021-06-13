$(document).ready(function(){
	// console.log('hello');
	// console.log(window.location.pathname.substr(3));
	var p_num=window.location.pathname.substr(3);
	var p_url='/p/'+p_num+'/';
	// console.log(p_json_url);
	$.get(p_url+'config.json',function(data,status){
		// console.log(status);
		// console.log(data);
		document.title=data.name;
		$('#problem-name').html(data.name);
		$.get(p_url+'content.md',function(content,status){
			// console.log(content);
			$('#problem-content').html(marked(content));
			MathJax.Hub.Queue(["Typeset",MathJax.Hub,"problem-content"]);
		});
	});
});