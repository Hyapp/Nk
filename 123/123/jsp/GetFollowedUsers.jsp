<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String curUserId = session.getAttribute("currentUserId").toString();
out.print(MyDao.queryJsonArray("select * from Follow inner join Users " +
								"where Follow.mainUserId = Users.userId and Follow.followingUserId = ?",curUserId));

%>
