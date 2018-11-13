<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%=MyDao.queryJsonArray("select * from users where userId = ?", session.getAttribute("currentUserId"))
%>
