<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String curUserId = session.getAttribute("currentUserId").toString();
String targetUserId = session.getAttribute("targetUserId").toString();
int cnt = MyDao.queryInteger("select count(*) from Follow where mainUserId = ? and followingUserId = ?", curUserId,targetUserId);
out.print(String.valueOf(cnt));
%>
