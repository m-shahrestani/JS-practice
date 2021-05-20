<html>
<head>
<style>
.mat{
background-image:url('http://s2.freeupload.ir/i/00055/2c063w6bhgzf.jpg');
}
</style>
<script>
	function table(m,n)
	{
		var i,j;
		document.write("<table border='1' height='50%' width='35%'>");
		for(i=1;i<=m;i++)
		{
			document.write("<tr>");
			for(j=1;j<=n;j++){
				if(i==1 && j==1)
					document.write("<td id='"+(i*9+j-9)+"' class='mat'> </td>");
				else
					document.write("<td id='"+(i*9+j-9)+"' class=''> </td>");	}			
			document.write("</tr>");
		}
		document.write("</table>");
	}
	
	function move(n,d)
	{
	document.getElementById(n+d).style.background="url('a.jpg')";
	document.getElementById(n).style.background="url()";
	}
</script>
</head>

<body>
<script language="javascript">
	table(9,9);
var n=1;
document.write('<input type="button" value="↑" onclick="move(n,-9); n-=9;"><br>');
document.write('<input type="button" value="←" onclick="move(n,-1); n--;">');
document.write('<input type="button" value="→" onclick="move(n,+1); n++;"><br>');
document.write('<input type="button" value="↓" onclick="move(n,+9); n+=9;">');
</script>
</body>
</html>