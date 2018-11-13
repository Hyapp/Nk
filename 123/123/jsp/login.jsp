<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
	String eid = request.getParameter("e_id");
	String epw = request.getParameter("e_pwd");
	String sql = 
			"select count(*) from Users where userId=? and userPassword=?";
	
	int cnt = MyDao.queryInteger(sql, eid, epw);
	
	if(cnt > 0)
	{
		session.setAttribute("currentUserId", eid);
		out.print(MyDao.jsonMessage(true, "登陆成功！"));
	}
	else
	{
		out.print(MyDao.jsonMessage(false, "账号或者密码不正确！"));
	}
	
%>
