<%-- Created by IntelliJ IDEA. --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
    <h1>My First Servlet Demo</h1>
    <br>

    <a href="servlet/HelloServlet">Get Mode</a>

    <form action="servlet/HelloServlet" method="post">
        <input type="submit" value="Post Mode">
    </form>
</body>
</html>