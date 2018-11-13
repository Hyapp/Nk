<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%=MyDao.queryJsonArray(
		"select * from Classes inner join ClassToType "                                +
		"where Classes.classId = ClassToType.classId and ClassToType.classTypeId = 2"				
	)
%>
