var connectTimeOutLimit=3000;
var infoShowTimeLimit=1000;
$(document).ready(function(){
	startTime();
	checkCookie();
	// $('#LoginModal').css('display','block');
	// $('#LoginDialog').css('display','block');
	// $("#nav-awesome .dropdown-menu").css('display','block');
	setHoverMenu();
});

// console.log((new Date()).toGMTString());
// Wed, 03 Jul 2019 04:57:22 GMT
// Wed Jul 03 2019 12:53:59 GMT+0800 (中国标准时间)

function setHoverMenu(){
	$("#nav-awesome").on('mouseover',function(){
		$("#nav-awesome .dropdown-menu").css('display','block');
	});
	$("#nav-awesome").on('mouseout',function(){
		$("#nav-awesome .dropdown-menu").css('display','none');
	});
	$("#nav-awesome .dropdown-menu").on('mouseover',function(){
		$("#nav-awesome .dropdown-menu").css('display','block');
	});
	$("#nav-awesome .dropdown-menu").on('mouseout',function(){
		$("#nav-awesome .dropdown-menu").css('display','none');
	});
}

function setNoLogin(){
	// console.log("set no login!");
	$("#nav-user2").off("click");
	$("#nav-user2").on("click",function(){
		nav_login()
	});
	$("#nav-user2 a").html("Login");
	// console.log($("#nav-user2 a"));
	$("#nav-user1").off("click");
	$("#nav-user1").on("click",function(){
		nav_register();
	});
	$("#nav-user1 a").html("Register");
}

function nav_blog(){
	// console.log("test it!");
	$.getJSON('/vnote/_vnote.json',function(data){
		console.log(data);
	})
}

function nav_login(){
	$('#LoginModal').css('display','block');
	$('#LoginDialog').css('display','block');
	if(getExplorer!='ie'){
		$('#LoginModal input[name="username"]').focus();
	}
	$('#LoginModal input').on('keydown',(function(event){
		if(event.keyCode==13){
			login();
		}else if(event.keyCode==27){//Esc
			nav_login_close();
		}
	}));
	$('#LoginDialog').on('click',function(event){
		// event.preventDefault();
		return false;
	});
	$('#LoginModal').on('click',function(event){
		$('#LoginModal').css('display','none');
		$('#LoginDialog').css('display','none');
	});
}

function nav_register(){
	$('#RegisterModal').css('display','block');
	$('#RegisterDialog').css('display','block');
	if(getExplorer!='ie'){
		$('#RegisterModal input[name="username"]').focus();
	}
	$('#RegisterModal input').on('keydown',(function(event){
		if(event.keyCode==13){//Enter
			register();
		}else if(event.keyCode==27){//Esc
			nav_register_close();
		}
	}));
	$('#RegisterDialog').on('click',function(event){
		// event.preventDefault();
		return false;
	});
	$('#RegisterModal').on('click',function(event){
		$('#RegisterModal').css('display','none');
		$('#RegisterDialog').css('display','none');
	});
}

function nav_info_close(){
	$('#InfoModal').css('display','none');
}

function nav_login_close(){
	$('#LoginModal').css('display','none');
}

function nav_register_close(){
	$('#RegisterModal').css('display','none');
}

function showInfo(info){
	// console.log("show info "+info);
	$('#InfoModal').css('display','block');
	$('#InfoModal').css('z-index',1500);
	// console.log($('#InfoModal'));
	$('#InfoModal .ModalContent').html(info);
	setTimeout(function(){
		$("#InfoModal").css('display','none');
		$('#InfoModal').css('z-index',-1);
	},infoShowTimeLimit);
}

function register(){
	// console.log('test register!');
	var username=$('#RegisterModal input[name="username"]')[0];
	var password=$('#RegisterModal input[name="password"]')[0];
	var repeat_password=$('#RegisterModal input[name="repeat_password"]')[0];
	// console.log(password);
	// console.log(repeat_password);
	if(password.value==repeat_password.value){
		// console.log("equal");
		var postdata={"username":username.value,"password":password.value};
		// console.log(postdata);
		var timeout=setTimeout(function(){
			showInfo("Connect Timeout!");
		},connectTimeOutLimit);
		$.post("/php/register.php",postdata,function(data,status){
			if(timeout){
				clearTimeout(timeout);
				timeout=null;
			}
			console.log(data);
			// console.log(status);
			if(status=="success"){
				// console.log("post success");
				if(data=="1"){
					// console.log("register successful!");
					$('#RegisterModal').css('display','none');
					showInfo("Register Successful!<br>Login Auto!");
					setLoginCookie(postdata);
					loginWithCookie();
				}else if(data=="-1"){
					showInfo("Duplicated Username!");
					// console.log("register failed!");
				}else{
					showInfo("Register Failed!");
				}
			}else{
				showInfo("Connect Failed!");
			}
		});
	}else{
		// console.log("unequal");
		showInfo("Repeat Password Unequal!");
	}
}

function login(){
	var username=$('#LoginModal input[name="username"]')[0];
	var password=$('#LoginModal input[name="password"]')[0];
	var postdata={"username":username.value,"password":password.value};
	// console.log(postdata);
	var timeout=setTimeout(function(){
		showInfo("Connect Timeout!");
	},connectTimeOutLimit);
	$.post("/php/login.php",postdata,function(data,status){
		if(timeout){
			clearTimeout(timeout);
			timeout=null;
		}
		// console.log(data);
		// console.log(status);
		if(status=="success"){
			// console.log("post success");
			if(data=="-1"){
				$('#LoginModal').css('display','none');
				// showInfo("Login Successful!<br>Welcome "+username.value);
				setLoginCookie(postdata);
				LoginSuccess();
			}else if(data=="-2"){
				showInfo("Password Wrong!");
			}else{
				showInfo("Username Don't exist!");
			}
		}else{
			showInfo("Connect Failed!");
		}
	});
}

function setLoginCookie(data){
	setCookie("username",encodeURIComponent(data.username),365);
	setCookie("password",encodeURIComponent(data.password),365);
	console.log(document.cookie);
}

function delLoginCookie(){
	delCookie("username");
	delCookie("password");
}

function setCookie(cname,cvalue,exdays){
	var d=new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	// console.log(expires);
	document.cookie=cname + "=" + cvalue + "; " + expires;
	// console.log(cname + "=" + cvalue + "; " + expires);
	// console.log(document.cookie);
}

function LoginSuccess(){
	// console.log("Login Successful");
	$("#nav-user2").off("click");
	$("#nav-user2").on("click",function(){
		ShowUser()
	});
	$("#nav-user2 a").html("User");
	$("#nav-user1").off("click");
	$("#nav-user1").on("click",function(){
		logout()
	});
	$("#nav-user1 a").html("Logout");
}

function ShowUser(){
	// console.log("Show User");
	var username=decodeURIComponent(getCookie("username"));
	$("#UserInfoModal .ModalContent").html("Username: "+username+"<br>State: Online");
	$("#UserInfoModal").css('display','block');
}

function logout(){
	setNoLogin();
	delLoginCookie();
	// showInfo("Logout Successful!");
}

function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++){
		var c = ca[i].trim();
		if (c.indexOf(name)==0) 
			return c.substring(name.length,c.length);
	}
	return "";
}

function delCookie(cname){
	setCookie(cname,"",-1);
}

function loginWithCookie(){
	var username=decodeURIComponent(getCookie("username"));
	var password=decodeURIComponent(getCookie("password"));
	var postdata={"username":username,"password":password};
	// console.log(postdata);
	var timeout=setTimeout(function(){
		showInfo("Connect Timeout!");
	},connectTimeOutLimit);
	$.post("/php/login.php",postdata,function(data,status){
		if(timeout){
			clearTimeout(timeout);
			timeout=null;
		}
		// console.log(data);
		// console.log(status);
		if(status=="success"){
			// console.log("post success");
			if(data=="-1"){
				// showInfo("Login Auto!");
				LoginSuccess();
			}else{
				if(data=="-2"){
					showInfo("Password Wrong!");
				}else{
					showInfo("Username Don't exist!");
				}
				delCookie("username");
				delCookie("password");
			} 
		}else{
			showInfo("Connect Failed!");
		}
	});
}

function checkCookie(){
	var username=getCookie("username");
	if (username!=""){
		loginWithCookie();
	}else{
		// console.log("No cookie!");
		setNoLogin();
	}
}

// delete cookie
// setCookie("username","",-1);

// checkCookie();

function startTime(){
	var today=new Date();
	var y=today.getFullYear();
	var M=today.getMonth()+1;
	var d=today.getDate();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	d=checkTime(d);
	M=checkTime(M);
	m=checkTime(m);
	s=checkTime(s);
	$('#footerTime').html(y+'-'+M+'-'+d+' '+h+":"+m+":"+s);
	t=setTimeout(function(){startTime()},500);
}
function checkTime(i){
	if(i<10){
		i="0"+i;
	}
	return i;
}

var getExplorer = (function () {
    var explorer = window.navigator.userAgent,
        compare = function (s) { return (explorer.indexOf(s) >= 0); },
        ie11 = (function () { return ("ActiveXObject" in window) })();
    if (compare("MSIE") || ie11) { return 'ie'; }
    else if (compare("Firefox") && !ie11) { return 'firefox'; }
    else if (compare("Chrome") && !ie11) {
        if (explorer.indexOf("Edge") > -1) {
            return 'edge';
        } else {
            return 'chrome';
        }
    }
    else if (compare("Opera") && !ie11) { return 'opera'; }
    else if (compare("Safari") && !ie11) { return 'safari'; }

})();
// console.log(getExplorer);