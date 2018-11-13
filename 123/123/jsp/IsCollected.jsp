<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String ClassId = session.getAttribute("currentClass").toString();
String UserId = session.getAttribute("currentUserId").toString();
int p = MyDao.queryInteger("select count(*) from Collection where collectClassId = ? and collectUserId = ?",ClassId,UserId);
out.print(String.valueOf(p));
%>