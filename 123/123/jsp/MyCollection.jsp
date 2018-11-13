<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%=MyDao.queryJsonArray(
		"select * from Collection inner join Classes 	"                 	+
		"where collectClassId = Classes.classId and	 	"					+
		"collectUserId = ?", session.getAttribute("currentUserId").toString())
%>
