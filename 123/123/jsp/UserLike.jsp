<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String userId = session.getAttribute("currentUserId").toString();
String classId = session.getAttribute("currentClass").toString();
MyDao.update("insert into UserLike(userId,classId) value(?,?);", userId,classId);
out.print(MyDao.jsonMessage(true, "我喜欢"));
%>
