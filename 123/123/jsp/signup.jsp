<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
	String eid = request.getParameter("e_id");
	int id = Integer.parseInt(eid);
	String epw = request.getParameter("e_pwd1");
	String epw1 = request.getParameter("e_pwd2");
	String eName = request.getParameter("e_name");
	if(!epw.equals(epw1))
	{
		out.print(MyDao.jsonMessage(false,"两次输入的密码不一致！"));
	}
	else
	{
		String sql1 = 
				"select count(*) from Users where userId=?";
		
		int num = MyDao.queryInteger(sql1, id);
		if(0 == num)
		{
			String sql = 
					"insert into Users(userId,userName,userPassword,userSex) value(?,?,?,0)";
			MyDao.update(sql, id,eName,epw);
			out.print(MyDao.jsonMessage(true, "注册成功！"));
		}
		else
		{
			out.print(MyDao.jsonMessage(false,"该账户已被注册！"));
		}
		
	}

%>
