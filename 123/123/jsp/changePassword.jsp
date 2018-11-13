<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
	String eId = session.getAttribute("currentUserId").toString();
	String oldEpw = request.getParameter("e_pwd1");
	String newEpw1 = request.getParameter("e_pwd2");
	String newEpw2 = request.getParameter("e_pwd3");
	if(!newEpw1.equals(newEpw2))
	{
		out.print(MyDao.jsonMessage(false, "您输入的两次密码不一致！"));
	}
	else{
		String findOldPwd = "select userPassword from Users where userId=?";
		String oldPwd = MyDao.queryString(findOldPwd, eId);
		
		if(!oldPwd.equals(oldEpw))
		{
			out.print(MyDao.jsonMessage(false, "原密码不正确！"));
		}
		else
		{
			String changePassword = 
					"update Users set userPassword = ? where userId = ?;";
			MyDao.update(changePassword,newEpw1,eId);
			out.print(MyDao.jsonMessage(true, "密码修改成功！"));
		}
	}
%>