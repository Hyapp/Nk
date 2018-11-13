<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" import= "my.dao.*" %>

<%
String currentClassId = session.getAttribute("currentClass").toString();
int cnt = MyDao.queryInteger("select count(*) from Comments where classId = ?",currentClassId);
if(cnt == 0)
{
	out.print("[]");
}
else
{
	out.print(MyDao.queryJsonArray("select userName,userComment,Users.userId from Comments inner join Users  " 	+
								   "where Comments.userId = Users.userId     "	+
								   "and Comments.classId = ?  order by CommentId desc;", currentClassId));
}

%>
