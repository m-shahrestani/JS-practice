<html>
	<head>
		<style>
		.A{background:url("toop1.jpg");}
		</style>

		<script language="javascript">
		function table(p,q)
		{
		var i,j;
		document.write("<table border='1' width='80%' height='80%'>");
			for(i=0;i<=(p-1);i++)
			{
				document.write("<tr>");
				for(j=1;j<=q;j++)
				{
					if(i==0&j==1)
					document.write("<td id='(i*p)+j)' class='A'>"+((i*p)+j)+"</td>");
					else
					document.write("<td id='(i*p)+j)' class=''>"+((i*p)+j)+"</td>");
				}
				document.write("</tr>");
			}
			document.write("</table>");
		}

		function bala(o)
		{

			document.getElementById(o).style.background="url('toop1.jpg')";
			document.getElementById(o+5).style.background="url()";
		}
		function payin(o)
		{
			
			document.getElementById(o).style.background="url('toop1.jpg')";
			document.getElementById(o-5).style.background="url()";
		}
		function rast(o)
		{
			
			document.getElementById(o).style.background="url('toop1.jpg')";
			document.getElementById(o-1).style.background="url()";
		}
		function chap(o)
		{
			document.getElementById(o).style.background="url('toop1.jpg')";
			document.getElementById(o+1).style.background="url()";
		}
		</script>

	</head>
	<body>
		<script language="javascript">
		table(5,5);
		var o=1;
		document.write('<input type="button" value="↑" onclick="bala(o-5); ">');
		document.write('<input type="button" value="↓" onclick="payin(o+5); ">');
		document.write('<input type="button" value="→" onclick="rast(o+1); ">');
		document.write('<input type="button" value="←" onclick="chap(o-1); ">');

		</script>		
	</body>
</html>
