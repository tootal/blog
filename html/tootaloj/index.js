$(document).ready(function(){
	// console.log('hello');
	$.get('p/p.json',function(data,status){
		// console.log(status);
		// console.log(data);
		for(var i=0;i<data.total;i++){
			var name='<a href="/p/'+data.problems[i].uri+'">'+data.problems[i].name+'</a>';
			var stat='0/0';
			$('#p').append('<tr><td>'+name+'</td><td>'+stat+'</td></tr>');
		}
	});
});
/*$(document).ready(function(){
	// local file (need http server!)
	cf_api='temp/problemset.problems.json';
	// remote file
	// cf_api='http://codeforces.com/api/problemset.problems';
	$.get(cf_api,function(data,status){
		// console.log(status);
		// console.log(data.result.problems[0]);
		var len=data.result.problems.length;
		for (var i=len-1;i>=0;i--){
			// console.log(data.result.problems[i]);
			var problem=data.result.problems[i];
			var name='<a href="http://codeforces.com/problemset/problem/'+problem.contestId+'/'+problem.index+'">'+problem.name+'</a>';
			var tags='';
			for(var j=0;j<problem.tags.length;j++){
				tags+='<span id="tag">'+problem.tags[j]+'</span>';
				if((j+1)%3==0)tags+='<br>';
			}
			var count=data.result.problemStatistics[i].solvedCount;
			if(count>=10000)count=Math.round(count/1000)+'K';
			else if(count>=1000)count=Math.round(count/100)/10+'K';
			$('#p').append('<tr><td>'+problem.contestId+problem.index+'</td><td>'+name+'</td><td>'+tags+'</td><td>'+count+'</td></tr>');
		}
	});
});*/
