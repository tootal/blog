<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Hello</title>
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
<div id="header" class="header"></div>
<div class="content">
<h3>Hello</h3>
<form action="Leave" method="POST">
	<textarea class="message" name="msg"></textarea>
	<br>
	<input type="submit" name="leave" value="Post">
</form>
</div>

<div class="footer">Server Time: <%=new java.util.Date()%></div>
<script src="main.js" charset="utf-8"></script>
</body>
</html>
