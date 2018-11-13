<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String newName = request.getParameter("newNickName").toString();
String newSignature = request.getParameter("newSignature").toString();
String newSex = request.getParameter("newSex").toString();
String curUserId = session.getAttribute("currentUserId").toString();

MyDao.update("Update Users set UserName       = ? where userId = ?", newName,curUserId);
MyDao.update("Update Users set UserSex        = ? where userId = ?", newSex,curUserId);
MyDao.update("Update Users set UserPersonInfo = ? where userId = ?", newSignature,curUserId);
out.print(MyDao.jsonMessage(true, "已保存！"));
%>
