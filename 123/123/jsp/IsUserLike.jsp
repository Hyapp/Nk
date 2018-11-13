<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String userId = session.getAttribute("currentUserId").toString();
String classId = session.getAttribute("currentClass").toString();
int cnt = MyDao.queryInteger("select count(*) from UserLike where userId = ? and classId = ?", userId,classId);
out.print(String.valueOf(cnt));
%>
