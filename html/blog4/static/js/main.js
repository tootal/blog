var index_page=0;
test_console();
setTime();

function test_console(){
	// window.status="页面加载完成";
	// 浏览器已禁用该功能
	/*console.group('输出类型');
	console.log("日志");
	console.info("信息");
	console.warn("警告");
	console.error("错误");
	console.groupEnd();*/

	// console.log("其实控制台可强大啦,比如字体%c加粗%c,以及%c红色%c字体","font-weight: bold;","","color: red;","");
	// console.log('%cMy name is 会对全.', 'color: #fff; background: #f40; font-size: 24px;');

	// console.log(getExplorer);

	// console.log(marked);
}

function setTime(){
	var today=new Date();
	var y=today.getFullYear();
	var M=today.getMonth()+1;
	var d=today.getDate();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	// d=checkTime(d);
	// M=checkTime(M);
	m=checkTime(m);
	s=checkTime(s);
	document.getElementsByClassName("footer-time")[0].innerHTML=y+'年'+M+'月'+d+'日 '+h+":"+m+":"+s;
	t=setTimeout(function(){setTime()},500);
};

function checkTime(i){
	if(i<10){
		i="0"+i;
	}
	return i;
}

var getExplorer=(function(){
    var explorer=window.navigator.userAgent,
        compare=function(s){
        	return (explorer.indexOf(s)>=0);
        },
        ie11=(function (){
        	return ("ActiveXObject" in window);
        })();
    if(compare("MSIE")||ie11){
    	return 'ie';
    }else if(compare("Firefox")&&!ie11){
    	return 'firefox';
    }else if(compare("Chrome")&&!ie11){
        if (explorer.indexOf("Edge")>-1){
            return 'edge';
        }else{
            return 'chrome';
        }
    }else if(compare("Opera")&&!ie11){
    	return 'opera';
    }else if(compare("Safari")&&!ie11){
    	return 'safari';
    }
})();

function iframeAutoHeight(){
	var iframe=document.getElementById("content-iframe");
	if(navigator.userAgent.indexOf("MSIE")>0||navigator.userAgent.indexOf("rv:11")>0||navigator.userAgent.indexOf("Firefox")>0){
		iframe.height=iframe.contentWindow.document.body.scrollHeight;
	}else{
		iframe.height=iframe.contentWindow.document.documentElement.scrollHeight;
	}
}