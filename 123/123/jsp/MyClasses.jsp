<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%=
	MyDao.queryJsonArray(
			"select * from Classes inner join ChoosingClasses "                 +
			"where Classes.classId = ChoosingClasses.choosingClassId and ChoosingClasses.choosingUserId =?", session.getAttribute("currentUserId").toString())
%>
