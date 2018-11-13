<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String currentComment = request.getParameter("commentContext");
String userId = session.getAttribute("currentUserId").toString();
String classId = session.getAttribute("currentClass").toString();
MyDao.update("insert into Comments(userid,classid,usercomment) value" 	+
		"(?,?,?)",userId,classId,currentComment);
out.print(MyDao.jsonMessage(true, "评论成功！"));
%>
