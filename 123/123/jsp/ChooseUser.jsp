<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String targetUser = request.getParameter("targetUserId").toString();
session.setAttribute("targetUserId", targetUser);
out.print(MyDao.jsonMessage(true, "拼命加载中..."));
%>
