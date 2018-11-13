<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" import="java.util.*"%>

<%
String targetInfo = session.getAttribute("targetUserId").toString();
out.print(MyDao.queryJsonArray("select * from users where userId = ?", targetInfo));
%>
