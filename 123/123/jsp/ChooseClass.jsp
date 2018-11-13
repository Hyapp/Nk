<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String ClassId = session.getAttribute("currentClass").toString();
String UserId = session.getAttribute("currentUserId").toString();
MyDao.update("insert into ChoosingClasses(choosingUserId,choosingClassId,choosingClassTime) value(?,?,0)", UserId, ClassId);
out.print(MyDao.jsonMessage(true, "您已报名该课程！"));
%>