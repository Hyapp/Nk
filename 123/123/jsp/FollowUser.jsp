<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String curUserId = session.getAttribute("currentUserId").toString();
String targetUserId = session.getAttribute("targetUserId").toString();
MyDao.update("insert into Follow(mainUserId,followingUserId) value(?,?);", curUserId,targetUserId);
out.print(MyDao.jsonMessage(true, "您已关注用户： "+ targetUserId));
%>