<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String ClassId = session.getAttribute("currentClass").toString();
String UserId = session.getAttribute("currentUserId").toString();
MyDao.update("delete from ChoosingClasses where choosingClassId = ? and choosingUserId = ?", ClassId,UserId);
out.print(MyDao.jsonMessage(true, "已取消报名该课程！"));
%>