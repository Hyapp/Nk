<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String curUserId = session.getAttribute("currentUserId").toString();
String targetUserId = session.getAttribute("targetUserId").toString();
MyDao.update("delete from Follow where mainUserId = ? and followingUserId = ?", curUserId,targetUserId);
out.print(MyDao.jsonMessage(true, "您已取消关注用户：" + targetUserId));
%>