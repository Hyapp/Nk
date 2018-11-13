<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String ClassId = request.getParameter("classId");
session.setAttribute("currentClass", ClassId);
out.print(MyDao.jsonMessage(true, "拼命加载中..."));
%>