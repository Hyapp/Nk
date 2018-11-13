<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%=MyDao.queryJsonArray(
		"select * from ChoosingClasses inner join Classes "                 +
		"where ChoosingClasses.ChoosingClassId = Classes.classId and "		+
		"	   ChoosingClasses.ChoosingUserId = ? "							,
				session.getAttribute("targetUserId").toString())
%>
