alert("Please do not refresh the page when a game is going on!");

var myCells= new Array(8);

for(i=0;i<8;i++)
{
	var row = document.getElementsByClassName("row");
	myCells[i] = row[i].getElementsByTagName("td");
}

for(i=1;i<7;i++)
{
	for(j=1;j<7;j++)
	{
		myCells[i][j].style.border="0px";
	}
}



var turn = document.getElementById("turn-roll");
var table = document.getElementsByTagName("table");
var x=0,y=0,w=0,h=0;
h=turn.clientHeight;
w=turn.clientWidth;
h1=turn.getElementsByTagName("p")[0].clientHeight;
turn.getElementsByClassName("die")[0].style.height=h1+"px";
x=table[0].clientHeight;
x=x/2-h/2;
y=table[0].clientWidth;
y=y/2-w/2;
turn.style.left=y+"px";
turn.style.top=x+"px"; 
var count=0;

var pathA = new Array();

for(i=0;i<8;i++)
{
	pathA[i]=myCells[0][i];
}

var l=0;
l=pathA.length;

var a=1;

for(i=l;i<l+7;i++)
{
	pathA[i]=myCells[a][7];
	a++;
}

l=pathA.length;
a=6;

for(i=l;i<l+7;i++)
{
	pathA[i]=myCells[7][a];
	a--;
}

l=pathA.length;
a=6;

for(i=l;i<l+6;i++)
{
	pathA[i]=myCells[a][0];
	a--;
}

var pathB = new Array();

a=7;
for(i=0;i<8;i++)
{
	pathB[i]=myCells[7][a];
	a--;
}


l=pathB.length;
a=6;

for(i=l;i<l+7;i++)
{
	pathB[i]=myCells[a][0];
	a--;
}

l=pathB.length;

for(i=l;i<l+7;i++)
{
	pathB[i]=myCells[0][i-l+1];
}

l=pathB.length;
a=1;

for(i=l;i<l+6;i++)
{
	pathB[i]=myCells[a][7];
	a++;
}

var count=0;
var countA=0;
var countB=0;
var a1=0,a2=0,b1=0,b2=0;
var winA=0,winB=0;
var die=0;
var player;
var countnA=2,countnB=2;

function alternate(p)
{
	if(p=="A")
	{
        if(a1==0)
        {
            countnA++;
    	    var imp=document.getElementById("A1");
    	    button.className="vanish";
    	    if(a2>0)
    	    {
                pathA[a2].className="glow";
                imp.className="glow";
                imp.onclick= function unlock(){
                
    		        imp.className="vanish";
    		        var content=pathA[0].innerHTML;
    		        if(content=="")
    		        {
    			        pathA[0].innerHTML = "A";
    		        }
    		        else if(content=="A")
    		        {
    			        pathA[0].innerHTML += " "+"A";
    		        }
    		        else if(content=="B")
    		        {
    			        pathA[0].innerHTML = "A";
		        	    countnB--;
		                if(pathB[b1].innerHTML!="B")
		        		{
		        			if(countnB==0)
		        		    {
		        		    	countB=0;
		        		    	countnB=2;
		        		    }
		                    b1=0;
		                    document.getElementById(""+content+"1").classList.remove("vanish");
		        		}
		        		if(pathB[b2].innerHTML!="B")
		        		{
		        			if(countnB==0)
		        		    {
		        		    	countB=0;
		        		    	countnB=2;
		        		    }
		        		    b2=0;
		        			document.getElementById(""+content+"2").classList.remove("vanish");
		                }
    		        }
    		        else if (content=="B B")
    		        {
    		        	pathA[0].innerHTML = "A";
    		        	countB=0;
    		        	b2=0;
		                document.getElementById("B1").classList.remove("vanish");
		                b1=0;
		                document.getElementById("B2").classList.remove("vanish");
    		        }
    		        button.classList.remove("vanish");
    		        pathA[a2].classList.remove("glow");
    		    }
                
    		    pathA[a2].onclick= function work(){
    		        countnA--;
    		        pathA[a2].classList.remove("glow");
	                workA();
	                button.classList.remove("vanish");
	                imp.classList.remove("glow");
	            }	
    	    }
    	    else
    	    {        	    
    	        imp.className="glow";
    	        imp.onclick= function unlock(){
    		        imp.className="vanish";
    		        var content=pathA[0].innerHTML;
    		        if(content=="")
    		        {
    			        pathA[0].innerHTML = "A";
    		        }
    		        else if(content=="A")
    		        {
    			        pathA[0].innerHTML += " "+"A";
    		        }
    		        else if(content=="B")
    		        {
    			        pathA[0].innerHTML = "A";
		        	    countnB--;
		                if(pathB[b1].innerHTML!="B")
		        		{
		        			if(countnB==0)
		        		    {
		        		    	countB=0;
		        		    	countnB=2;
		        		    }
		                    b1=0;
		                    document.getElementById(""+content+"1").classList.remove("vanish");
		        		}
		        		if(pathB[b2].innerHTML!="B")
		        		{
		        			if(countnB==0)
		        		    {
		        		    	countB=0;
		        		    	countnB=2;
		        		    }
		        		    b2=0;
		        			document.getElementById(""+content+"2").classList.remove("vanish");
		                }
    		        }
    		        else if (content=="B B")
    		        {
    		        	pathA[0].innerHTML = "A";
    		        	countB=0;
    		        	b2=0;
		                document.getElementById("B1").classList.remove("vanish");
		                b1=0;
		                document.getElementById("B2").classList.remove("vanish");
    		        }
    		        button.classList.remove("vanish");
    		    }	
    	    }
        }
        else if(a2==0)
        {
            countnA++;
    	    var imp=document.getElementById("A2");
    	    button.className="vanish";
    	    if(a1>0)
    	    {
                pathA[a1].className="glow";
                imp.className="glow";
                imp.onclick= function unlock(){
                
    		        imp.className="vanish";
    		        var content=pathA[0].innerHTML;
    		        if(content=="")
    		        {
    			        pathA[0].innerHTML = "A";
    		        }
    		        else if(content=="A")
    		        {
    			        pathA[0].innerHTML += " "+"A";
    		        }
    		        else if(content=="B")
    		        {
    			        pathA[0].innerHTML = "A";
		        	    countnB--;
		                if(pathB[b1].innerHTML!="B")
		        		{
		        			if(countnB==0)
		        		    {
		        		    	countB=0;
		        		    	countnB=2;
		        		    }
		                    b1=0;
		                    document.getElementById(""+content+"1").classList.remove("vanish");
		        		}
		        		if(pathB[b2].innerHTML!="B")
		        		{
		        			if(countnB==0)
		        		    {
		        		    	countB=0;
		        		    	countnB=2;
		        		    }
		        		    b2=0;
		        			document.getElementById(""+content+"2").classList.remove("vanish");
		                }
    		        }
    		        else if (content=="B B")
    		        {
    		        	pathA[0].innerHTML = "A";
    		        	countB=0;
    		        	b2=0;
		                document.getElementById("B1").classList.remove("vanish");
		                b1=0;
		                document.getElementById("B2").classList.remove("vanish");
    		        }
    		        button.classList.remove("vanish");
    		        pathA[a1].classList.remove("glow");
    		    }
                
    		    pathA[a1].onclick= function work(){
    		        countnA--;
    		        pathA[a1].classList.remove("glow");
	                workA();
	                button.classList.remove("vanish");
	                imp.classList.remove("glow");
	            }	
    	    }
		    else
		    {        	    
		        imp.className="glow";
		        imp.onclick= function unlock(){
			        imp.className="vanish";
			        var content=pathA[0].innerHTML;
			        if(content=="")
			        {
				        pathA[0].innerHTML = "A";
			        }
			        else if(content=="A")
			        {
				        pathA[0].innerHTML += " "+"A";
			        }
			        else if(content=="B")
			        {
				        pathA[0].innerHTML = "A";
		        	    countnB--;
		                if(pathB[b1].innerHTML!="B")
		        		{
		        			if(countnB==0)
		        		    {
		        		    	countB=0;
		        		    	countnB=2;
		        		    }
		                    b1=0;
		                    document.getElementById(""+content+"1").classList.remove("vanish");
		        		}
		        		if(pathB[b2].innerHTML!="B")
		        		{
		        			if(countnB==0)
		        		    {
		        		    	countB=0;
		        		    	countnB=2;
		        		    }
		        		    b2=0;
		        			document.getElementById(""+content+"2").classList.remove("vanish");
		                }
			        }
			        else if (content=="B B")
    		        {
    		        	pathA[0].innerHTML = "A";
    		        	countB=0;
    		        	b2=0;
		                document.getElementById("B1").classList.remove("vanish");
		                b1=0;
		                document.getElementById("B2").classList.remove("vanish");
    		        }
			        button.classList.remove("vanish");
			    }	
    	    }
        }
	}
	else if(p=="B")
	{
        if(b1==0)
        {
            countnB++;
    	    var imp=document.getElementById("B1");
    	    button.className="vanish";
    	    if(b2>0)
    	    {
                pathB[b2].className="glow";
                imp.className="glow";
                imp.onclick= function unlock(){
                
    		        imp.className="vanish";
    		        var content=pathB[0].innerHTML;
    		        if(content=="")
    		        {
    			        pathB[0].innerHTML = "B";
    		        }
    		        else if(content=="B")
    		        {
    			        pathB[0].innerHTML += " "+"B";
    		        }
    		        else if(content=="A")
    		        {
    			        pathB[0].innerHTML = "B";
		        	    countnA--;
		                if(pathA[a1].innerHTML!="A")
		        		{
		        			if(countnA==0)
		        		    {
		        		    	countA=0;
		        		    	countnA=2;
		        		    }
		                    a1=0;
		                    document.getElementById(""+content+"1").classList.remove("vanish");
		        		}
		        		if(pathA[a2].innerHTML!="A")
		        		{
		        			if(countnA==0)
		        		    {
		        		    	countA=0;
		        		    	countnA=2;
		        		    }
		        		    a2=0;
		        			document.getElementById(""+content+"2").classList.remove("vanish");
		                }
    		        }
    		        else if (content=="A A")
    		        {
    		        	countA=0;
    		        	a2=0;
		                document.getElementById("A1").classList.remove("vanish");
		                a1=0;
		                document.getElementById("A2").classList.remove("vanish");
    		        }
    		        button.classList.remove("vanish");
    		        pathB[b2].classList.remove("glow");
    		    }
                
    		    pathB[b2].onclick= function work(){
    		        countnB--;
    		        pathB[b2].classList.remove("glow");
	                workB();
	                button.classList.remove("vanish");
	                imp.classList.remove("glow");
	            }	
    	    }
    	    else
    	    {        	    
    	        imp.className="glow";
    	        imp.onclick= function unlock(){
    		        imp.className="vanish";
    		        var content=pathB[0].innerHTML;
    		        if(content=="")
    		        {
    			        pathB[0].innerHTML = "B";
    		        }
    		        else if(content=="B")
    		        {
    			        pathB[0].innerHTML += " "+"B";
    		        }
    		        else if(content=="A")
    		        {
    			        pathB[0].innerHTML = "B";
		        	    countnA--;
		                if(pathA[a1].innerHTML!="A")
		        		{
		        			if(countnA==0)
		        		    {
		        		    	countA=0;
		        		    	countnA=2;
		        		    }
		                    a1=0;
		                    document.getElementById(""+content+"1").classList.remove("vanish");
		        		}
		        		if(pathA[a2].innerHTML!="A")
		        		{
		        			if(countnA==0)
		        		    {
		        		    	countA=0;
		        		    	countnA=2;
		        		    }
		        		    a2=0;
		        			document.getElementById(""+content+"2").classList.remove("vanish");
		                }
    		        }
    		        else if (content=="A A")
    		        {
    		        	pathB[0].innerHTML = "B";
    		        	countA=0;
    		        	a2=0;
		                document.getElementById("A1").classList.remove("vanish");
		                a1=0;
		                document.getElementById("A2").classList.remove("vanish");
    		        }
    		        button.classList.remove("vanish");
    		    }	
    	    }
        }
        else if(b2==0)
        {
            countnB++;
    	    var imp=document.getElementById("A1");
    	    button.className="vanish";
    	    if(b1>0)
    	    {
                pathB[b1].className="glow";
                imp.className="glow";
                imp.onclick= function unlock(){
                
    		        imp.className="vanish";
    		        var content=pathB[0].innerHTML;
    		        if(content=="")
    		        {
    			        pathB[0].innerHTML = "B";
    		        }
    		        else if(content=="B")
    		        {
    			        pathB[0].innerHTML += " "+"B";
    		        }
    		        else if(content=="A")
    		        {
    			        pathB[0].innerHTML = "B";
		        	    countnA--;
		                if(pathA[a1].innerHTML!="A")
		        		{
		        			if(countnA==0)
		        		    {
		        		    	countA=0;
		        		    	countnA=2;
		        		    }
		                    a1=0;
		                    document.getElementById(""+content+"1").classList.remove("vanish");
		        		}
		        		if(pathA[a2].innerHTML!="A")
		        		{
		        			if(countnA==0)
		        		    {
		        		    	countA=0;
		        		    	countnA=2;
		        		    }
		        		    a2=0;
		        			document.getElementById(""+content+"2").classList.remove("vanish");
		                }
    		        }
    		        else if (content=="A A")
    		        {
    		        	pathB[0].innerHTML = "B";
    		        	countA=0;
    		        	a2=0;
		                document.getElementById("A1").classList.remove("vanish");
		                a1=0;
		                document.getElementById("A2").classList.remove("vanish");
    		        }
    		        button.classList.remove("vanish");
    		        pathB[b1].classList.remove("glow");
    		    }
                
    		    pathB[b1].onclick= function work(){
    		        countnB--;
    		        pathB[b1].classList.remove("glow");
	                workB();
	                button.classList.remove("vanish");
	                imp.classList.remove("glow");
	            }	
    	    }
		    else
		    {        	    
		        imp.className="glow";
		        imp.onclick= function unlock(){
			        imp.className="vanish";
			        var content=pathB[0].innerHTML;
			        if(content=="")
			        {
				        pathB[0].innerHTML = "B";
			        }
			        else if(content=="B")
			        {
				        pathB[0].innerHTML += " "+"B";
			        }
			        else if(content=="A")
			        {
                        pathB[0].innerHTML = "B";
		        	    countnA--;
		                if(pathA[a1].innerHTML!="A")
		        		{
		        			if(countnA==0)
		        		    {
		        		    	countA=0;
		        		    	countnA=2;
		        		    }
		                    a1=0;
		                    document.getElementById(""+content+"1").classList.remove("vanish");
		        		}
		        		if(pathA[a2].innerHTML!="A")
		        		{
		        			if(countnA==0)
		        		    {
		        		    	countA=0;
		        		    	countnA=2;
		        		    }
		        		    a2=0;
		        			document.getElementById(""+content+"2").classList.remove("vanish");
		                }			        
		            }
		            else if(content=="A A")
    		        {
    		        	pathB[0].innerHTML = "B";
    		        	countA=0;
    		        	a2=0;
		                document.getElementById("A1").classList.remove("vanish");
		                a1=0;
		                document.getElementById("A2").classList.remove("vanish");
    		        }
			        button.classList.remove("vanish");
			    }	
    	    }
        }
	}
}

function win()
{
    if(winA==2)
    {
    	button.disabled=true;
    	alert("Hurray! PlayerA won!! \n Please refresh the page to Start A New Game!");
    }
    if(winB==2)
    {
    	button.disabled=true;
    	alert("Hurray! PlayerB won!! \n Please refresh the page to Start A New Game!");
    }
}

function workA()
{
	var content1;
	if(countA==1)
    {
    	pathA[a1].innerHTML="";
		a1=a1+die;
		if(a1==27)
		{
			content1=pathA[a1].innerHTML;
		    winA++;
		    if(content1=="")
        	{
        	    pathA[a1].innerHTML = "A";
        	    alert("win count is "+winA);
        	    pathA[a1].innerHTML = "";
            }
            else if(content1=="B")
            {
            	pathA[a1].innerHTML = "A";
        	    countnB--;
                if(pathB[b1].innerHTML!="B")
        		{
        			if(countnB==0)
        		    {
        		    	countB=0;
        		    	countnB=2;
        		    }
                    b1=0;
                    document.getElementById(""+content1+"1").classList.remove("vanish");
        		}
        		if(pathB[b2].innerHTML!="B")
        		{
        			if(countnB==0)
        		    {
        		    	countB=0;
        		    	countnB=2;
        		    }
        		    b2=0;
        			document.getElementById(""+content1+"2").classList.remove("vanish");
                }
        	    alert("win count is "+winA);
        	    pathA[a1].innerHTML = "";       	    
            }
            else if (content=="B B")
	        {
	        	pathA[a1].innerHTML = "A";
	        	countB=0;
	        	b2=0;
                document.getElementById("B1").classList.remove("vanish");
                b1=0;
                document.getElementById("B2").classList.remove("vanish");
                alert("win count is "+winA);
        	    pathA[a1].innerHTML = "";
	        }
            win(); 
        }
		else if(a1>27)
		{
			a1=a1-die;
			if(a1!=27)
			{
                pathA[a1].innerHTML="A";
			}	
		}
		else
		{
			var content1=pathA[a1].innerHTML;
		    if(content1=="")
            {
        	    pathA[a1].innerHTML = "A";
            }
            else if(content1=="B")
        	{
        		pathA[a1].innerHTML = "A";
        	    countnB--;
        		if(pathB[b1].innerHTML!="B")
        		{
        			if(countnB==0)
        		    {
        		    	countB=0;
        		    	countnB=2;
        		    }
                    b1=0;
                    document.getElementById(""+content1+"1").classList.remove("vanish");
        		}
        		if(pathB[b2].innerHTML!="B")
        		{
        			if(countnB==0)
        		    {
        		    	countB=0;
        		    	countnB=2;
        		    }
        		    b2=0;
        			document.getElementById(""+content1+"2").classList.remove("vanish");
                }
            }
            else if (content=="B B")
	        {
	        	pathA[a1].innerHTML = "A";
	        	countB=0;
	        	b2=0;
                document.getElementById("B1").classList.remove("vanish");
                b1=0;
                document.getElementById("B2").classList.remove("vanish");
	        }
		}
    }
    else if(countA>=2)
    {
        if(winA==0)
        {
        	if(a1==a2)
        	{
        		var con1=document.getElementById("A1").className;
        		var con2=document.getElementById("A2").className;
        		if(con1=="vanish" && con2!="vanish")
        		{
        			pathA[a1].innerHTML="A";
			        a1=a1+die;
			        if(a1==27)
			        {
			  	        content1=pathA[a1].innerHTML;
			            winA++;
			            if(content1=="")
	        	        {
	        	        	pathA[a1].innerHTML="A";
	        	            alert("win count is "+winA);
	        	            pathA[a1].innerHTML = "";
	                    }
	                    else if(content1=="B")
	                    {
	        	            pathA[a1].innerHTML = "A";
	        	            countnB--;
	        		        if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                        alert("win count is "+winA);
	        	            pathA[a1].innerHTML = "";
	                    } 
	                    else if (content=="B B")
				        {
				        	pathA[a1].innerHTML = "A";
				        	countB=0;
				        	b2=0;
			                document.getElementById("B1").classList.remove("vanish");
			                b1=0;
			                document.getElementById("B2").classList.remove("vanish");
			                alert("win count is "+winA);
			        	    pathA[a1].innerHTML = "";
				        }
	                    win(); 
	                }
			        else if(a1>27)
			        {
				        a1=a1-die;
				        pathA[a1].innerHTML="A";
			        }
			        else
			        {
				        var content1=pathA[a1].innerHTML;
			            if(content1=="")
	                    {
	        	            pathA[a1].innerHTML = "A";
	                    }
	                    else if(content1=="B")
	        	        {
	        	            pathA[a1].innerHTML = "A";
	        	            countnB--;
	        		        if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	        	        }
	        	        else if (content=="B B")
				        {
				        	pathA[a1].innerHTML = "A";
				        	countB=0;
				        	b2=0;
			                document.getElementById("B1").classList.remove("vanish");
			                b1=0;
			                document.getElementById("B2").classList.remove("vanish");			              
				        }
	                }
        		}
        		else if(con1!="vanish" && con2=="vanish")
        		{
        			pathA[a2].innerHTML="A";
			        a2=a2+die;
			        if(a2==27)
			        {
			  	        content1=pathA[a2].innerHTML;
			            winA++;
			            if(content1=="")
	        	        {
	        	        	pathA[a2].innerHTML="A";
	        	            alert("win count is "+winA);
	        	            pathA[a2].innerHTML = "";
	                    }
	                    else if(content1=="B")
	                    {
	        	            pathA[a2].innerHTML = "A";
	        	            countnB--;
	        		        if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                        alert("win count is "+winA);
	        	            pathA[a2].innerHTML = "";
	                    } 
	                    else if (content=="B B")
				        {
				        	pathA[a2].innerHTML = "A";
				        	countB=0;
				        	b2=0;
			                document.getElementById("B1").classList.remove("vanish");
			                b1=0;
			                document.getElementById("B2").classList.remove("vanish");
			                alert("win count is "+winA);
			        	    pathA[a2].innerHTML = "";
				        }
	                    win(); 
	                }
			        else if(a1>27)
			        {
				        a2=a2-die;
				        pathA[a2].innerHTML="A";
			        }
			        else
			        {
				        var content1=pathA[a2].innerHTML;
			            if(content1=="")
	                    {
	        	            pathA[a2].innerHTML = "A";
	                    }
	                    else if(content1=="B")
	        	        {
	        	            pathA[a2].innerHTML = "A";
	        	            countnB--;
	        		        if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	        	        }
	        	        else if (content=="B B")
				        {
				        	pathA[a2].innerHTML = "A";
				        	countB=0;
				        	b2=0;
			                document.getElementById("B1").classList.remove("vanish");
			                b1=0;
			                document.getElementById("B2").classList.remove("vanish");			              
				        }
	                }
        		}
        		else
        		{
	                pathA[a1].innerHTML="A";
			        a1=a1+die;
			        if(a1==27)
			        {
			  	        content1=pathA[a1].innerHTML;
			            winA++;
			            if(content1=="")
	        	        {
	        	        	pathA[a1].innerHTML="A";
	        	            alert("win count is "+winA);
	        	            pathA[a1].innerHTML = "";
	                    }
	                    else if(content1=="B")
	                    {
	        	            pathA[a1].innerHTML = "A";
	        	            countnB--;
	        		        if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                        alert("win count is "+winA);
	        	            pathA[a1].innerHTML = "";
	                    } 
	                    else if (content=="B B")
				        {
				        	pathA[a1].innerHTML = "A";
				        	countB=0;
				        	b2=0;
			                document.getElementById("B1").classList.remove("vanish");
			                b1=0;
			                document.getElementById("B2").classList.remove("vanish");
			                alert("win count is "+winA);
			        	    pathA[a1].innerHTML = "";
				        }
	                    win(); 
	                }
			        else if(a1>27)
			        {
				        a1=a1-die;
				        
			            a2=a2+die;
			            if(a2==27)
			            {
				            content1=pathA[a2].innerHTML;
			                winA++;
			                if(content1=="")
	        	            {
	        	                pathA[a2].innerHTML = "A";
	        	                alert("win count is "+winA);
	        	                pathA[a1].innerHTML = "";
	                        }
	                        else if(content1=="B")
	                        {
	        	                pathA[a2].innerHTML = "A";
	        	                countnB--;
	        		            if(pathB[b1].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				                    b1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathB[b2].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				        		    b2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
	        	                alert("win count is "+winA);
	        	                pathA[a2].innerHTML = "";
	                        }
	                        else if (content=="B B")
					        {
					        	pathA[a2].innerHTML = "A";
					        	countB=0;
					        	b2=0;
				                document.getElementById("B1").classList.remove("vanish");
				                b1=0;
				                document.getElementById("B2").classList.remove("vanish");
				                alert("win count is "+winA);
				        	    pathA[a2].innerHTML = "";
					        }
	                        win(); 
	                    }
			            else if(a2>27)
			            {
				            a2=a2-die;
				            pathA[a2].innerHTML="A A";
			            }
			            else
			            {
				            var content1=pathA[a2].innerHTML;
			                if(content1=="")
	                        {
	        	                pathA[a2].innerHTML = "A";
	                        }
	                        else if(content1=="B")
	        	            {
	        	                pathA[a2].innerHTML = "A";
	        	                countnB--;
	        		            if(pathB[b1].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				                    b1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathB[b2].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				        		    b2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
	                        }
	                        else if (content=="B B")
					        {
					        	pathA[a2].innerHTML = "A";
					        	countB=0;
					        	b2=0;
				                document.getElementById("B1").classList.remove("vanish");
				                b1=0;
				                document.getElementById("B2").classList.remove("vanish");			              
					        }
			            }
			        }
			        else
			        {
				        var content1=pathA[a1].innerHTML;
			            if(content1=="")
	                    {
	        	            pathA[a1].innerHTML = "A";
	                    }
	                    else if(content1=="B")
	        	        {
	        	            pathA[a1].innerHTML = "A";
	        	            countnB--;
	        		        if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	        	        }
	        	        else if (content=="B B")
				        {
				        	pathA[a1].innerHTML = "A";
				        	countB=0;
				        	b2=0;
			                document.getElementById("B1").classList.remove("vanish");
			                b1=0;
			                document.getElementById("B2").classList.remove("vanish");			              
				        }
	                }
	            }
            }
            else
            {
            	if(document.getElementById("A1").className=="vanish" && a1!=27)
            	{
            		pathA[a1].className="glow";
            	}
            	if(document.getElementById("A2").className=="vanish" && a2!=27)
            	{
            		pathA[a2].className="glow";
            	}           	
            	button.className="vanish";
            	pathA[a1].onclick=function done(){
	                pathA[a1].innerHTML="";
	                pathA[a1].classList.remove("glow");
			        a1=a1+die;
			        if(a1==27)
			        {
			  	        content1=pathA[a1].innerHTML;
			            winA++;
			            if(content1=="")
	        	        {
	        	            pathA[a1].innerHTML = "A";
	        	            alert("win count is "+winA);
	        	            pathA[a1].innerHTML = "";
	                    }
	                    else if(content1=="A")
	        		    {
	        			    pathA[a1].innerHTML += " "+"A";
	        			    alert("win count is "+winA);
	        	            pathA[a1].innerHTML = "";
	        		    }
	                    else if(content1=="B")
	                    {
	                    	pathA[a1].innerHTML = "A";
	        	            countnB--;
	        		        if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	        	            alert("win count is "+winA);
	        	            pathA[a1].innerHTML = "";
	                    } 
	                    else if (content=="B B")
				        {
				        	pathA[a1].innerHTML = "A";
				        	countB=0;
				        	b2=0;
			                document.getElementById("B1").classList.remove("vanish");
			                b1=0;
			                document.getElementById("B2").classList.remove("vanish");
			                alert("win count is "+winA);
			        	    pathA[a1].innerHTML = "";
				        }
	                    win(); 
	                }
			        else if(a1>27)
			        {
				        a1=a1-die;
				        pathA[a1].innerHTML="A";
				        pathA[a2].classList.remove("glow");
				        pathA[a2].innerHTML="";
			            a2=a2+die;
			            if(a2==27)
			            {
				            content1=pathA[a2].innerHTML;
			                winA++;
			                if(content1=="")
	        	            {
	        	                pathA[a2].innerHTML = "A";
	        	                alert("win count is "+winA);
	        	                pathA[a2].innerHTML = "";
	                        }
	                        else if(content1=="A")
	        		        {
	        			        pathA[a2].innerHTML += " "+"A";
	        			        alert("win count is "+winA);
	        	                pathA[a2].innerHTML = "";
	        		        }  
	                        else if(content1=="B")
	                        {
	        	                pathA[a2].innerHTML = "A";
	        	                countnB--;
	        		            if(pathB[b1].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				                    b1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathB[b2].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				        		    b2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
	        	                
	        	                alert("win count is "+winA);
	        	                pathA[a2].innerHTML = "";
	                        }
	                        else if (content=="B B")
					        {
					        	pathA[a2].innerHTML = "A";
					        	countB=0;
					        	b2=0;
				                document.getElementById("B1").classList.remove("vanish");
				                b1=0;
				                document.getElementById("B2").classList.remove("vanish");
				                alert("win count is "+winA);
				        	    pathA[a2].innerHTML = "";
					        }
	                        win(); 
	                    }
			            else if(a2>27)
			            {
				            a2=a2-die;
				            pathA[a2].innerHTML="A";
			            }
			            else
			            {
				            var content1=pathA[a2].innerHTML;
			                if(content1=="")
	                        {
	        	                pathA[a2].innerHTML = "A";
	                        }
	                        else if(content1=="A")
	        		        {
	        			        pathA[a2].innerHTML += " "+"A";
	        		        }
	                        else if(content1=="B")
	        	            {
	        	                pathA[a2].innerHTML = "A";
	        	                countnB--;
	        		            if(pathB[b1].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				                    b1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathB[b2].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				        		    b2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
	                        }
	                        else if (content=="B B")
					        {
					        	pathA[a2].innerHTML = "A";
					        	countB=0;
					        	b2=0;
				                document.getElementById("B1").classList.remove("vanish");
				                b1=0;
				                document.getElementById("B2").classList.remove("vanish");			              
					        }
			            }
			        }
			        else
			        {
				        var content1=pathA[a1].innerHTML;
			            if(content1=="")
	                    {
	        	            pathA[a1].innerHTML = "A";
	                    }
	                    else if(content1=="A")
	        		    {
	        			    pathA[a1].innerHTML += " "+"A";
	        		    }
	                    else if(content1=="B")
	        	        {
	        	            pathA[a1].innerHTML = "A";
	        	            countnB--;
	        		        if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	        	        }
	        	        else if (content=="B B")
				        {
				        	pathA[a1].innerHTML = "A";
				        	countB=0;
				        	b2=0;
			                document.getElementById("B1").classList.remove("vanish");
			                b1=0;
			                document.getElementById("B2").classList.remove("vanish");			              
				        }
	                }
	                button.classList.remove("vanish");
	            	pathA[a2].classList.remove("glow");
            	}

            	pathA[a2].onclick=function done(){
	                pathA[a2].innerHTML="";
	                pathA[a2].classList.remove("glow");
			        a2=a2+die;
			        if(a2==27)
			        {
			  	        content1=pathA[a2].innerHTML;
			            winA++;
			            if(content1=="")
	        	        {
	        	            pathA[a2].innerHTML = "A";
	        	            alert("win count is "+winA);
	        	            pathA[a2].innerHTML = "";
	                    }
	                    else if(content1=="A")
	        		    {
	        			    pathA[a2].innerHTML += " "+"A";
	        			    alert("win count is "+winA);
	        	            pathA[a2].innerHTML = "";
	        		    }
	                    else if(content1=="B")
	                    {
	        	            pathA[a2].innerHTML = "A";
	        	            countnB--;
	        		        if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	        	            alert("win count is "+winA);
	        	            pathA[a2].innerHTML = "";
	                    } 
	                    else if (content=="B B")
				        {
				        	pathA[a2].innerHTML = "A";
				        	countB=0;
				        	b2=0;
			                document.getElementById("B1").classList.remove("vanish");
			                b1=0;
			                document.getElementById("B2").classList.remove("vanish");
			                alert("win count is "+winA);
			        	    pathA[a2].innerHTML = "";
				        }
	                    win(); 
	                }
			        else if(a2>27)
			        {
				        a2=a2-die;
				        pathA[a2].innerHTML="A";
				        pathA[a1].innerHTML="";
				        pathA[a1].classList.remove("glow");
			            a1=a1+die;
			            if(a1==27)
			            {
				            content1=pathA[a1].innerHTML;
			                winA++;
			                if(content1=="")
	        	            {
	        	                pathA[a1].innerHTML = "A";
	        	                alert("win count is "+winA);
	        	                pathA[a1].innerHTML = "";
	                        }
	                        else if(content1=="A")
	        		        {
	        			        pathA[a1].innerHTML += " "+"A";
	        			        alert("win count is "+winA);
	        	                pathA[a1].innerHTML = "";
	        		        }
	                        else if(content1=="B")
	                        {
	        	                pathA[a1].innerHTML = "A";
	        	                countnB--;
	        		            if(pathB[b1].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				                    b1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathB[b2].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				        		    b2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
	        	                alert("win count is "+winA);
	        	                pathA[a1].innerHTML = "";
	                        } 
	                        else if (content=="B B")
					        {
					        	pathA[a1].innerHTML = "A";
					        	countB=0;
					        	b2=0;
				                document.getElementById("B1").classList.remove("vanish");
				                b1=0;
				                document.getElementById("B2").classList.remove("vanish");
				                alert("win count is "+winA);
				        	    pathA[a1].innerHTML = "";
					        }
	                        win();
	                    }
			            else if(a1>27)
			            {
				            a1=a1-die;
				            pathA[a1].innerHTML="A";
			            }
			            else
			            {
				            var content1=pathA[a1].innerHTML;
			                if(content1=="")
	                        {
	        	                pathA[a1].innerHTML = "A";
	                        }
	                        else if(content1=="A")
	        		        {
	        			        pathA[a1].innerHTML += " "+"A";
	        		        }
	                        else if(content1=="B")
	        	            {
	        	                pathA[a1].innerHTML = "A";
	        	                countnB--;
	        		            if(pathB[b1].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				                    b1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathB[b2].innerHTML!="B")
				        		{
				        			if(countnB==0)
				        		    {
				        		    	countB=0;
				        		    	countnB=2;
				        		    }
				        		    b2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
	                        }
                            else if (content=="B B")
					        {
					        	pathA[a1].innerHTML = "A";
					        	countB=0;
					        	b2=0;
				                document.getElementById("B1").classList.remove("vanish");
				                b1=0;
				                document.getElementById("B2").classList.remove("vanish");			              
					        }
			            }
			        }
			        else
			        {
				        var content1=pathA[a2].innerHTML;
			            if(content1=="")
	                    {
	        	            pathA[a2].innerHTML = "A";
	                    }
	                    else if(content1=="A")
	        		    {
	        			    pathA[a2].innerHTML += " "+"A";
	        		    }
	                    else if(content1=="B")
	        	        {
	        	            pathA[a2].innerHTML = "A";
	        	            countnB--;
	        		        if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	        	        }
	        	        else if (content=="B B")
				        {
				        	pathA[a2].innerHTML = "A";
				        	countB=0;
				        	b2=0;
			                document.getElementById("B1").classList.remove("vanish");
			                b1=0;
			                document.getElementById("B2").classList.remove("vanish");			              
				        }
	                }
	                button.classList.remove("vanish");
	                pathA[a1].classList.remove("glow");
            	}

            }
		}
		else if(winA==1)
		{
			pathA[a2].innerHTML="";
		    a2=a2+die;
		    if(a2==27)
		    {
			    content1=pathA[a2].innerHTML;
		        winA++;
		        if(content1=="")
        	    {
        	        pathA[a2].innerHTML = "A";
        	        alert("win count is "+winA);
        	        pathA[a2].innerHTML = "";
                }
                else if(content1=="A")
        		{
        			pathA[a2].innerHTML += " "+"A";
        		}
                else if(content1=="B")
                {
        	        pathA[a2].innerHTML = "A";
        	        countnB--;
                    if(pathB[b1].innerHTML!="B")
	        		{
	        			if(countnB==0)
	        		    {
	        		    	countB=0;
	        		    	countnB=2;
	        		    }
	                    b1=0;
	                    document.getElementById(""+content1+"1").classList.remove("vanish");
	        		}
	        		if(pathB[b2].innerHTML!="B")
	        		{
	        			if(countnB==0)
	        		    {
	        		    	countB=0;
	        		    	countnB=2;
	        		    }
	        		    b2=0;
	        			document.getElementById(""+content1+"2").classList.remove("vanish");
	                }
        	        alert("win count is "+winA);
        	        pathA[a2].innerHTML = "";
                } 
                else if (content=="B B")
		        {
		        	pathA[a2].innerHTML = "A";
		        	countB=0;
		        	b2=0;
	                document.getElementById("B1").classList.remove("vanish");
	                b1=0;
	                document.getElementById("B2").classList.remove("vanish");
	                alert("win count is "+winA);
	        	    pathA[a2].innerHTML = "";
		        }
                win();
            }
		    else if(a2>27)
		    {
			    a2=a2-die;
			    pathA[a2].innerHTML="A";
		    }
		    else
		    {
			    var content1=pathA[a2].innerHTML;
		        if(content1=="")
                {
        	        pathA[a2].innerHTML = "A";
                }
                else if(content1=="B")
        	    {
        	        pathA[a2].innerHTML = "A";
        	        countnB--;
        	        if(pathB[b1].innerHTML!="B")
	        		{
	        			if(countnB==0)
	        		    {
	        		    	countB=0;
	        		    	countnB=2;
	        		    }
	                    b1=0;
	                    document.getElementById(""+content1+"1").classList.remove("vanish");
	        		}
	        		if(pathB[b2].innerHTML!="B")
	        		{
	        			if(countnB==0)
	        		    {
	        		    	countB=0;
	        		    	countnB=2;
	        		    }
	        		    b2=0;
	        			document.getElementById(""+content1+"2").classList.remove("vanish");
	                }
                }
                else if (content=="B B")
		        {
		        	pathA[a2].innerHTML = "A";
		        	countB=0;
		        	b2=0;
	                document.getElementById("B1").classList.remove("vanish");
	                b1=0;
	                document.getElementById("B2").classList.remove("vanish");			              
		        }
		    }
		}
    }
}

function workB()
{
	var content1;
	if(countB==1)
    {
    	pathB[b1].innerHTML="";
		b1=b1+die;
		if(b1==27)
		{
			content1=pathB[b1].innerHTML;
		    winB++;
		    if(content1=="")
        	{
        	    pathB[b1].innerHTML = "B";
        	    alert("win count is "+winB);
        	    pathB[b1].innerHTML = "";
            }
            else if(content=="A")
	        {
                pathB[b1].innerHTML = "B";
        	    countnA--;
                if(pathA[a1].innerHTML!="A")
        		{
        			if(countnA==0)
        		    {
        		    	countA=0;
        		    	countnA=2;
        		    }
                    a1=0;
                    document.getElementById(""+content+"1").classList.remove("vanish");
        		}
        		if(pathA[a2].innerHTML!="A")
        		{
        			if(countnA==0)
        		    {
        		    	countA=0;
        		    	countnA=2;
        		    }
        		    a2=0;
        			document.getElementById(""+content+"2").classList.remove("vanish");
                }
                alert("win count is "+winB);
        	    pathB[b1].innerHTML = "";			        
            }
            else if(content=="A A")
	        {
	        	pathB[b1].innerHTML = "B";
	        	countA=0;
	        	a2=0;
                document.getElementById("A1").classList.remove("vanish");
                a1=0;
                document.getElementById("A2").classList.remove("vanish");
                alert("win count is "+winB);
        	    pathB[b1].innerHTML = "";
	        }
            win(); 
        }
		else if(b1>27)
		{
			b1=b1-die;
			if(b1!=27)
			{
                pathB[b1].innerHTML="B";
			}
		}
		else
		{
			var content1=pathB[b1].innerHTML;
		    if(content1=="")
            {
        	    pathB[b1].innerHTML = "B";
            }
            else if(content1=="A")
	        {
                pathB[b1].innerHTML = "B";
        	    countnA--;
                if(pathA[a1].innerHTML!="A")
        		{
        			if(countnA==0)
        		    {
        		    	countA=0;
        		    	countnA=2;
        		    }
                    a1=0;
                    document.getElementById(""+content+"1").classList.remove("vanish");
        		}
        		if(pathA[a2].innerHTML!="A")
        		{
        			if(countnA==0)
        		    {
        		    	countA=0;
        		    	countnA=2;
        		    }
        		    a2=0;
        			document.getElementById(""+content+"2").classList.remove("vanish");
                }			        
            }
            else if(content1=="A A")
	        {
	        	pathB[b1].innerHTML = "B";
	        	countA=0;
	        	a2=0;
                document.getElementById("A1").classList.remove("vanish");
                a1=0;
                document.getElementById("A2").classList.remove("vanish");
	        }
		}
    }
    else if(countB>=2)
    {
        if(winB==0)
        {
        	if(b1==b2)
        	{
        		var con1=document.getElementById("B1").className;
        		var con2=document.getElementById("B2").className;
        		if(con2!="vanish" && con1=="vanish")
        		{
        			pathB[b1].innerHTML="B"; 
			        b1=b1+die;
			        if(b1==27)
			        {
			  	        content1=pathB[b1].innerHTML;
			            winB++;
			            if(content1=="")
	        	        {
	        	            pathB[b1].innerHTML = "B";
	        	            alert("win count is "+winB);
			        	    pathB[b1].innerHTML = "";
	                    }              
	                    else if(content1=="A")
	                    {
	        	            pathB[b1].innerHTML = "B";
	        	            countnA--;
	        		        if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                        alert("win count is "+winB);
	        	            pathB[b1].innerHTML = "";
	                    } 
	                    else if (content1=="A A")
				        {
				        	pathB[b1].innerHTML = "B";
				        	countA=0;
				        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
			                alert("win count is "+winB);
			        	    pathB[b1].innerHTML = "";
				        }
	                    win(); 
	                }
			        else if(b1>27)
			        {
				        b1=b1-die;
				        pathB[b1].innerHTML="B";
			        }
			        else
			        {
				        var content1=pathB[b1].innerHTML;
			            if(content1=="")
	                    {
	        	            pathB[b1].innerHTML = "B";
	                    }
	                    else if(content1=="A")
	        	        {
	        	            pathB[b1].innerHTML = "B";
	        	            countnA--;
	        		        if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                    } 
	                    else if (content1=="A A")
				        {
				        	pathB[b1].innerHTML = "B";
				        	countA=0;
				        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
				        }
	                }
        		}
        		else if(con1!="vanish" && con2=="vanish")
        		{
        			pathB[b2].innerHTML="B"; 
			        b2=b2+die;
			        if(b2==27)
			        {
			  	        content1=pathB[b2].innerHTML;
			            winB++;
			            if(content1=="")
	        	        {
	        	            pathB[b2].innerHTML = "B";
	        	            alert("win count is "+winB);
			        	    pathB[b2].innerHTML = "";
	                    }              
	                    else if(content1=="A")
	                    {
	        	            pathB[b2].innerHTML = "B";
	        	            countnA--;
	        		        if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                        alert("win count is "+winB);
	        	            pathB[b2].innerHTML = "";
	                    } 
	                    else if (content1=="A A")
				        {
				        	pathB[b2].innerHTML = "B";
				        	countA=0;
				        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
			                alert("win count is "+winB);
			        	    pathB[b2].innerHTML = "";
				        }
	                    win(); 
	                }
			        else if(b2>27)
			        {
				        b2=b2-die;
				        pathB[b2].innerHTML="B";
			        }
			        else
			        {
				        var content1=pathB[b2].innerHTML;
			            if(content1=="")
	                    {
	        	            pathB[b2].innerHTML = "B";
	                    }
	                    else if(content1=="A")
	        	        {
	        	            pathB[b2].innerHTML = "B";
	        	            countnA--;
	        		        if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                    } 
	                    else if (content1=="A A")
				        {
				        	pathB[b2].innerHTML = "B";
				        	countA=0;
				        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
				        }
	                }
        		}
        		else 
        		{
	                pathB[b1].innerHTML="B"; 
			        b1=b1+die;
			        if(b1==27)
			        {
			  	        content1=pathB[b1].innerHTML;
			            winB++;
			            if(content1=="")
	        	        {
	        	            pathB[b1].innerHTML = "B";
	        	            alert("win count is "+winB);
			        	    pathB[b1].innerHTML = "";
	                    }              
	                    else if(content1=="A")
	                    {
	        	            pathB[b1].innerHTML = "B";
	        	            countnA--;
	        		        if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                        alert("win count is "+winB);
	        	            pathB[b1].innerHTML = "";
	                    } 
	                    else if (content1=="A A")
				        {
				        	pathB[b1].innerHTML = "B";
				        	countA=0;
				        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
			                alert("win count is "+winB);
			        	    pathB[b1].innerHTML = "";
				        }
	                    win(); 
	                }
			        else if(b1>27)
			        {
				        b1=b1-die;
				        
			            b2=b2+die;
			            if(b2==27)
			            {
				            content1=pathB[b2].innerHTML;
			                winB++;
			                if(content1=="")
	        	            {
	        	                pathB[b2].innerHTML = "B";
	        	                alert("win count is "+winB);
	        	                pathB[b2].innerHTML = "";
	                        }                      
	                        else if(content1=="A")
	                        {
	        	                pathB[b2].innerHTML = "B";
		        	            countnA--;
		        		        if(pathA[a1].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				                    a1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathA[a2].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				        		    a2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
		                        alert("win count is "+winB);
		        	            pathB[b2].innerHTML = "";
		                    } 
		                    else if (content=="A A")
					        {
					        	pathB[b2].innerHTML = "B";
					        	countA=0;
					        	a2=0;
				                document.getElementById("A1").classList.remove("vanish");
				                a1=0;
				                document.getElementById("A2").classList.remove("vanish");
				                alert("win count is "+winB);
				        	    pathB[b2].innerHTML = "";
					        }
	                        win(); 
	                    }
			            else if(b2>27)
			            {
				            b2=b2-die;
				            pathB[b2].innerHTML = "B B";
			            }
			            else
			            {
				            var content1=pathB[b2].innerHTML;
			                if(content1=="")
	                        {
	        	                pathB[b2].innerHTML = "B";
	                        }
	                        else if(content1=="A")
	        	            {
	        	                pathB[b2].innerHTML = "B";
		        	            countnA--;
		        		        if(pathA[a1].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				                    a1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathA[a2].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				        		    a2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
		                    } 
		                    else if (content1=="A A")
					        {
					        	pathB[b2].innerHTML = "B";
					        	countA=0;
					        	a2=0;
				                document.getElementById("A1").classList.remove("vanish");
				                a1=0;
				                document.getElementById("A2").classList.remove("vanish");
					        }
			            }
			        }
			        else
			        {
				        var content1=pathB[b1].innerHTML;
			            if(content1=="")
	                    {
	        	            pathB[b1].innerHTML = "B";
	                    }
	                    else if(content1=="A")
	        	        {
	        	            pathB[b1].innerHTML = "B";
	        	            countnA--;
	        		        if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                    } 
	                    else if (content1=="A A")
				        {
				        	pathB[b1].innerHTML = "B";
				        	countA=0;
				        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
				        }
	                }
	            }
            }
            else
            {
            	if(document.getElementById("B1").className=="vanish" && b1!=27)
            	{
            		pathB[b1].className="glow";
            	}
            	if(document.getElementById("B2").className=="vanish" && b2!=27)
            	{
            		pathB[b2].className="glow";
            	}           	
            	button.className="vanish";
            	pathB[b1].onclick=function done(){
	                pathB[b1].innerHTML="";
	                pathB[b1].classList.remove("glow");
			        b1=b1+die;
			        if(b1==27)
			        {
			  	        content1=pathB[b1].innerHTML;
			            winB++;
			            if(content1=="")
	        	        {
	        	            pathB[b1].innerHTML = "B";
	        	            alert("win count is "+winB);
	        	            pathB[b1].innerHTML = "";
	                    }
	                    else if(content1=="B")
	        		    {
	        			    pathB[b1].innerHTML += " "+"B";
	        			    alert("win count is "+winB);
	        	            pathB[b1].innerHTML = "";
	        		    }
	                    else if(content1=="A")
	                    {
	        	            pathB[b1].innerHTML = "B";
	        	            countnA--;
	        		        if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                        alert("win count is "+winB);
	        	            pathB[b1].innerHTML = "";
	                    } 
	                    else if (content1=="A A")
				        {
				        	pathB[b1].innerHTML = "B";
				        	countA=0;
				        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
			                alert("win count is "+winB);
			        	    pathB[b1].innerHTML = "";
				        }
	                    win(); 
	                }
			        else if(b1>27)
			        {
				        b1=b1-die;
				        pathB[b1].innerHTML="B";
				        pathB[b2].classList.remove("glow");
				        pathB[b2].innerHTML="";
			            b2=b2+die;
			            if(b2==27)
			            {
				            content1=pathB[b2].innerHTML;
			                winB++;
			                if(content1=="")
	        	            {
	        	                pathB[b2].innerHTML = "B";
	        	                alert("win count is "+winB);
	        	                pathB[b2].innerHTML = "";
	                        }
	                        else if(content1=="B")
	        		        {
	        			        pathB[b2].innerHTML += " "+"B";
	        			        alert("win count is "+winB);
	        	                pathB[b2].innerHTML = "";
	        		        }
	                        else if(content1=="A")
	                        {
	        	                pathB[b2].innerHTML = "B";
		        	            countnA--;
		        		        if(pathA[a1].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				                    a1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathA[a2].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				        		    a2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
				                alert("win count is "+winB);
	        	                pathB[b2].innerHTML = "";
		                    } 
		                    else if (content1=="A A")
					        {
					        	pathB[b2].innerHTML = "B";
					        	countA=0;
					        	a2=0;
				                document.getElementById("A1").classList.remove("vanish");
				                a1=0;
				                document.getElementById("A2").classList.remove("vanish");
				                alert("win count is "+winB);
	        	                pathB[b2].innerHTML = "";
					        }
	                        win(); 
	                    }
			            else if(b2>27)
			            {
				            b2=b2-die;
				            pathB[b2].innerHTML="B";
			            }
			            else
			            {
				            var content1=pathB[b2].innerHTML;
			                if(content1=="")
	                        {
	        	                pathA[b2].innerHTML = "B";
	                        }
	                        else if(content1=="B")
	        		        {
	        			        pathB[b2].innerHTML += " "+"B";
	        		        }
	                        else if(content1=="A")
	        	            {
	        	            	pathB[b2].innerHTML="B";
	        	                countnA--;
		        		        if(pathA[a1].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				                    a1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathA[a2].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				        		    a2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
		                    } 
		                    else if (content1=="A A")
					        {
					        	pathB[b2].innerHTML = "B";
					        	countA=0;
					        	a2=0;
				                document.getElementById("A1").classList.remove("vanish");
				                a1=0;
				                document.getElementById("A2").classList.remove("vanish");
					        } 
			            }
			        }
			        else
			        {
				        var content1=pathB[b1].innerHTML;
			            if(content1=="")
	                    {
	        	            pathB[b1].innerHTML = "B";
	                    }
	                    else if(content1=="B")
	        		    {
	        			    pathB[b1].innerHTML += " "+"B";
	        		    }
	                    else if(content1=="A")
	        	        {
	        	            pathB[b1].innerHTML="B";
	    	                countnA--;
	        		        if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                    } 
	                    else if (content1=="A A")
				        {
				        	pathB[b1].innerHTML = "B";
				        	countA=0;
				        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
				        } 
	                }
                    pathB[b2].classList.remove("glow");
                    button.classList.remove("vanish");
            	}

            	pathB[b2].onclick=function done(){
	                pathB[b2].innerHTML="";
	                pathB[b2].classList.remove("glow");
			        b2=b2+die;
			        if(b2==27)
			        {
			  	        content1=pathB[b2].innerHTML;
			            winB++;
			            if(content1=="")
	        	        {
	        	            pathB[b2].innerHTML = "B";
	        	            alert("win count is "+winB);
	        	            pathB[b2].innerHTML = "";
	                    }
	                    else if(content1=="B")
	        		    {
	        			    pathB[b2].innerHTML += " "+"B";
	        			    alert("win count is "+winB);
	        	            pathB[b2].innerHTML = "";
	        		    }
	                    else if(content1=="A")
	                    {
        	                pathB[b2].innerHTML="B";
        	                countnA--;
	        		        if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
			                alert("win count is "+winB);
	        	            pathB[b2].innerHTML = "";
	                    } 
	                    else if (content1=="A A")
				        {
				        	pathB[b2].innerHTML = "B";
				        	countA=0;
				        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
			                alert("win count is "+winB);
	        	            pathB[b2].innerHTML = "";
				        } 
	                    win(); 
	                }
			        else if(b2>27)
			        {
				        b2=b2-die;
				        pathB[b2].innerHTML="B";
				        pathB[b1].classList.remove("glow");
				        pathB[b1].innerHTML="";
			            b1=b1+die;
			            if(b1==27)
			            {
				            content1=pathB[b1].innerHTML;
			                winB++;
			                if(content1=="")
	        	            {
	        	                pathB[b1].innerHTML = "B";
	        	                alert("win count is "+winB);
	        	                pathB[b1].innerHTML = "";
	                        }
	                        else if(content1=="B")
	        		        {
	        			        pathB[b1].innerHTML += " "+"B";
	        			        alert("win count is "+winB);
	        	                pathB[b1].innerHTML = "";
	        		        }  
	                        else if(content1=="A")
	                        {
	        	                pathB[b1].innerHTML="B";
	        	                countnA--;
		        		        if(pathA[a1].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				                    a1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathA[a2].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				        		    a2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
				                alert("win count is "+winB);
	        	                pathB[b1].innerHTML = "";
		                    } 
		                    else if (content1=="A A")
					        {
					        	pathB[b1].innerHTML = "B";
					        	countA=0;
					        	a2=0;
				                document.getElementById("A1").classList.remove("vanish");
				                a1=0;
				                document.getElementById("A2").classList.remove("vanish");
				                alert("win count is "+winB);
	        	                pathB[b1].innerHTML = "";
					        }  
	                        win();
	                    }
			            else if(b1>27)
			            {
				            b1=b1-die;
				            pathB[b1].innerHTML="B";
			            }
			            else
			            {
				            var content1=pathB[b1].innerHTML;
			                if(content1=="")
	                        {
	        	                pathB[b1].innerHTML = "B";
	                        }
	                        else if(content1=="B")
	        		        {
	        			        pathB[b1].innerHTML += " "+"B";
	        		        }
	                        else if(content1=="A")
	        	            {
	        	                pathB[b1].innerHTML="B";
	        	                countnA--;
		        		        if(pathA[a1].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				                    a1=0;
				                    document.getElementById(""+content1+"1").classList.remove("vanish");
				        		}
				        		if(pathA[a2].innerHTML!="A")
				        		{
				        			if(countnA==0)
				        		    {
				        		    	countA=0;
				        		    	countnA=2;
				        		    }
				        		    a2=0;
				        			document.getElementById(""+content1+"2").classList.remove("vanish");
				                }
		                    } 
		                    else if (content1=="A A")
					        {
					        	pathB[b1].innerHTML = "B";
					        	countA=0;
					        	a2=0;
				                document.getElementById("A1").classList.remove("vanish");
				                a1=0;
				                document.getElementById("A2").classList.remove("vanish");
					        } 
			            }
			        }
			        else
			        {
				        var content1=pathB[b2].innerHTML;
			            if(content1=="")
	                    {
	        	            pathB[b2].innerHTML = "B";
	                    }
	                    else if(content1=="B")
	        		    {
	        			    pathB[b2].innerHTML += " "+"B";
	        		    }
	                    else if(content1=="A")
	        	        {
	        	            pathB[b2].innerHTML="B";
        	                countnA--;
	        		        if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content1+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content1+"2").classList.remove("vanish");
			                }
	                    } 
	                    else if (content1=="A A")
				        {
				        	pathB[b2].innerHTML = "B";
				        	countA=0;
				        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
				        } 
	                }
	                pathB[b1].classList.remove("glow");
	                button.classList.remove("vanish");
            	}

            }
		}
		else if(winB==1)
		{
			pathB[b2].innerHTML="";
		    b2=b2+die;
		    if(b2==27)
		    {
			    content1=pathB[b2].innerHTML;
		        winB++;
		        if(content1=="")
        	    {
        	        pathB[b2].innerHTML = "B";
        	        alert("win count is "+winB);
	        	    pathB[b2].innerHTML = "";
                }
                else if(content1=="B")
        		{
        			pathB[b2].innerHTML += " "+"B";
        			alert("win count is "+winB);
	        	    pathB[b2].innerHTML = "";
        		}
                else if(content1=="A")
                {
        	        pathB[b2].innerHTML="B";
	                countnA--;
    		        if(pathA[a1].innerHTML!="A")
	        		{
	        			if(countnA==0)
	        		    {
	        		    	countA=0;
	        		    	countnA=2;
	        		    }
	                    a1=0;
	                    document.getElementById(""+content1+"1").classList.remove("vanish");
	        		}
	        		if(pathA[a2].innerHTML!="A")
	        		{
	        			if(countnA==0)
	        		    {
	        		    	countA=0;
	        		    	countnA=2;
	        		    }
	        		    a2=0;
	        			document.getElementById(""+content1+"2").classList.remove("vanish");
	                }
	                alert("win count is "+winB);
	        	    pathB[b2].innerHTML = "";
                } 
                else if (content1=="A A")
		        {
		        	pathB[b2].innerHTML = "B";
		        	countA=0;
		        	a2=0;
	                document.getElementById("A1").classList.remove("vanish");
	                a1=0;
	                document.getElementById("A2").classList.remove("vanish");
	                alert("win count is "+winB);
	        	    pathB[b2].innerHTML = "";
		        } 
                win();
            }
		    else if(b2>27)
		    {
			    b2=b2-die;
			    pathB[b2].innerHTML="B";
		    }
		    else
		    {
			    var content1=pathB[b2].innerHTML;
		        if(content1=="")
                {
        	        pathB[b2].innerHTML = "B";
                }
                else if(content1=="A")
        	    {
        	        pathB[b2].innerHTML="B";
	                countnA--;
    		        if(pathA[a1].innerHTML!="A")
	        		{
	        			if(countnA==0)
	        		    {
	        		    	countA=0;
	        		    	countnA=2;
	        		    }
	                    a1=0;
	                    document.getElementById(""+content1+"1").classList.remove("vanish");
	        		}
	        		if(pathA[a2].innerHTML!="A")
	        		{
	        			if(countnA==0)
	        		    {
	        		    	countA=0;
	        		    	countnA=2;
	        		    }
	        		    a2=0;
	        			document.getElementById(""+content1+"2").classList.remove("vanish");
	                }
                } 
                else if (content1=="A A")
		        {
		        	pathB[b2].innerHTML = "B";
		        	countA=0;
		        	a2=0;
	                document.getElementById("A1").classList.remove("vanish");
	                a1=0;
	                document.getElementById("A2").classList.remove("vanish");
		        } 
		    }
		}
    }
}

var button=document.getElementById("events");
button.onclick= function dice(){
    player=document.getElementById("turn-roll").getElementsByTagName("span")[0].innerHTML;
	die=Math.ceil(Math.random()*6);
    turn.getElementsByClassName("die")[0].innerHTML=""+die;
    if(die==6)
    {
        if(player=="A")
        {
        	if(countA==0)
            {
                countA++;
        	    var imp=document.getElementById("A"+countA);
        	    imp.className="glow";
        	    button.className="vanish";
        	    imp.onclick= function unlock(){
        		    imp.className="vanish";
        		    var content=pathA[0].innerHTML;
        		    if(content=="")
        		    {
        			    pathA[0].innerHTML = "A";
        		    }
        		    if(content=="B")
        		    {
        		    	pathA[0].innerHTML = "A";
        		    	countnB--;
        			    if(pathB[b1].innerHTML!="B")
		        		{
		        			if(countnB==0)
		        		    {
		        		    	countB=0;
		        		    	countnB=2;
		        		    }
		                    b1=0;
		                    document.getElementById(""+content+"1").classList.remove("vanish");
		        		}
		        		if(pathB[b2].innerHTML!="B")
		        		{
		        			if(countnB==0)
		        		    {
		        		    	countB=0;
		        		    	countnB=2;
		        		    }
		        		    b2=0;
		        			document.getElementById(""+content+"2").classList.remove("vanish");
		                }
        		    }
        		    button.classList.remove("vanish");
        		}
           }
           else if(countA==1)
           {
           	    countA++;
        	    var imp=document.getElementById("A"+countA);
        	    button.className="vanish";
        	    if(a1>0)
        	    {
        	    	if(a1!=27)
        	    	{
                        pathA[a1].className="glow";
        	    	}
                    imp.className="glow";
                    imp.onclick= function unlock(){
                    
        		        imp.className="vanish";
        		        var content=pathA[0].innerHTML;
        		        if(content=="")
        		        {
        			        pathA[0].innerHTML = "A";
        		        }
        		        else if(content=="A")
        		        {
        			        pathA[0].innerHTML += " "+"A";
        		        }
        		        else if(content=="B")
        		        {
        		        	pathA[0].innerHTML = "A";
        		    	    countnB--;
        			        if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content+"2").classList.remove("vanish");
			                }
        		        }
        		        button.classList.remove("vanish");
        		        pathA[a1].classList.remove("glow");
        		    }
                    
        		    pathA[a1].onclick= function work(){
        		        countA--;
        		        pathA[a1].classList.remove("glow");
		                workA();
		                button.classList.remove("vanish");
		                imp.classList.remove("glow");
		            }	
        	    }
        	    else
        	    {        	    
        	        imp.className="glow";
        	        imp.onclick= function unlock(){
        		        imp.className="vanish";
        		        var content=pathA[0].innerHTML;
        		        if(content=="")
        		        {
        			        pathA[0].innerHTML = "A";
        		        }
        		        else if(content=="A")
        		        {
        			        pathA[0].innerHTML += " "+"A";
        		        }
        		        else if(content=="B")
	    		        {
	    			        pathA[0].innerHTML = "A";
			        	    countnB--;
			                if(pathB[b1].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			                    b1=0;
			                    document.getElementById(""+content+"1").classList.remove("vanish");
			        		}
			        		if(pathB[b2].innerHTML!="B")
			        		{
			        			if(countnB==0)
			        		    {
			        		    	countB=0;
			        		    	countnB=2;
			        		    }
			        		    b2=0;
			        			document.getElementById(""+content+"2").classList.remove("vanish");
			                }
	    		        }
	    		        else if (content=="B B")
	    		        {
	    		        	pathA[0].innerHTML="A";
	    		        	countB=0;
	    		        	b2=0;
			                document.getElementById("B1").classList.remove("vanish");
			                b1=0;
			                document.getElementById("B2").classList.remove("vanish");
	    		        }
        		        button.classList.remove("vanish");
        		    }	
        	    }
        	}
        	else if(countnA!=2)
        	{
        		alternate(A);
        	} 
        	else if(countA>=2)
        	{
        		workA();
        	}   	    
        }
        if(player=="B")
        {
        	if(countB==0)
            {
                countB++;
        	    var imp=document.getElementById("B"+countB);
        	    imp.className="glow";
        	    button.className="vanish";
        	    imp.onclick= function unlock(){
        		    imp.className="vanish";
        		    var content=pathB[0].innerHTML;
        		    if(content=="")
        		    {
        			    pathB[0].innerHTML = "B";
        		    }
        		    if(content=="A")
        		    {
        			    pathB[0].innerHTML = "B";
		        	    countnA--;
		                if(pathA[a1].innerHTML!="A")
		        		{
		        			if(countnA==0)
		        		    {
		        		    	countA=0;
		        		    	countnA=2;
		        		    }
		                    a1=0;
		                    document.getElementById(""+content+"1").classList.remove("vanish");
		        		}
		        		if(pathA[a2].innerHTML!="A")
		        		{
		        			if(countnA==0)
		        		    {
		        		    	countA=0;
		        		    	countnA=2;
		        		    }
		        		    a2=0;
		        			document.getElementById(""+content+"2").classList.remove("vanish");
		                }			        
		            }        		    
        		    button.classList.remove("vanish");
        		}
           }
           else if(countB==1)
           {
           	    countB++;
        	    var imp=document.getElementById("B"+countB);
        	    button.className="vanish";
        	    if(b1>0)
        	    {
        	    	if(b1!=27)
                    {
                        pathB[b1].className="glow";
                    }        
                    imp.className="glow";
                    imp.onclick= function unlock(){
                    
        		        imp.className="vanish";
        		        var content=pathB[0].innerHTML;
        		        if(content=="")
        		        {
        			        pathB[0].innerHTML = "B";
        		        }
        		        else if(content=="B")
        		        {
        			        pathB[0].innerHTML += " "+"B";
        		        }
        		        else if(content=="A")
        		        {
        			        pathB[0].innerHTML = "B";
			        	    countnA--;
			                if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content+"2").classList.remove("vanish");
			                }			        
			            }
			            else if(content=="A A")
	    		        {
	    		        	pathB[0].innerHTML="B";
	    		        	countA=0;
	    		        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
	    		        }
        		        button.classList.remove("vanish");
        		        pathB[b1].classList.remove("glow");
        		    }
                    
        		    pathB[b1].onclick= function work(){
        		        countB--;
        		        pathB[b1].classList.remove("glow");
		                workB();
		                button.classList.remove("vanish");
		                imp.classList.remove("glow");
		            }	
        	    }
        	    else
        	    {        	    
        	        imp.className="glow";
        	        imp.onclick= function unlock(){
        		        imp.className="vanish";
        		        var content=pathB[0].innerHTML;
        		        if(content=="")
        		        {
        			        pathB[0].innerHTML = "B";
        		        }
        		        else if(content=="B")
        		        {
        			        pathB[0].innerHTML += " "+"B";
        		        }
        		        else if(content=="A")
        		        {
        			        pathB[0].innerHTML = "B";
			        	    countnA--;
			                if(pathA[a1].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			                    a1=0;
			                    document.getElementById(""+content+"1").classList.remove("vanish");
			        		}
			        		if(pathA[a2].innerHTML!="A")
			        		{
			        			if(countnA==0)
			        		    {
			        		    	countA=0;
			        		    	countnA=2;
			        		    }
			        		    a2=0;
			        			document.getElementById(""+content+"2").classList.remove("vanish");
			                }			        
			            }
			            else if(content=="A A")
	    		        {
	    		        	pathB[0].innerHTML="B";
	    		        	countA=0;
	    		        	a2=0;
			                document.getElementById("A1").classList.remove("vanish");
			                a1=0;
			                document.getElementById("A2").classList.remove("vanish");
	    		        }
        		        button.classList.remove("vanish");
        		    }	
        	    }
        	}
        	else if(countnB!=2)
        	{
        		alternate(B);
        	}  
        	else if(countB>=2)
        	{
        		workB();
        	}
        }      	    
    }   
    else
    {
    	count++;
    	if(player=="A")
    	{
    		workA();
    	}
    	else if(player=="B")
    	{
    		workB();
    	}
    }

    if(count%2==0)
    {
        document.getElementById("turn-roll").getElementsByTagName("span")[0].innerHTML="A";
    }
    else
    {
    	document.getElementById("turn-roll").getElementsByTagName("span")[0].innerHTML="B";
    }
}
