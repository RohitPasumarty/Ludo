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
            }
            else if(content1=="B")
            {
        	    document.getElementById(""+content1+"1").classList.remove("vanish");
        	    pathA[a1].innerHTML = "A";
        	    countB--;
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
        	    document.getElementById(""+content1+"1").classList.remove("vanish");
        	    pathA[a1].innerHTML = "A";
        	    countB--;
            }
		}
    }
    else if(countA>=2)
    {
        if(winA==0)
        {
        	if(a1==a2)
        	{
                
		        a1=a1+die;
		        if(a1==27)
		        {
		  	        content1=pathA[a1].innerHTML;
		            winA++;
		            if(content1=="")
        	        {
        	            pathA[a1].innerHTML = "A";
                    }
                    else if(content1=="B")
                    {
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathA[a1].innerHTML = "A";
        	            countB--;
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
                        }
                        else if(content1=="B")
                        {
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathA[a2].innerHTML = "A";
        	                countB--;
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
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathA[a2].innerHTML = "A";
        	                countB--;
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
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathA[a1].innerHTML = "A";
        	            countB--;
        	        }
                }
            }
            else
            {
            	pathA[a1].className="glow";
            	pathA[a2].className="glow";
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
                    }
                    else if(content1=="A")
        		    {
        			    pathA[a1].innerHTML += " "+"A";
        		    }
                    else if(content1=="B")
                    {
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathA[a1].innerHTML = "A";
        	            countB--;
                    } 
                    win(); 
                }
		        else if(a1>27)
		        {
			        a1=a1-die;
			        pathA[a1].innerHTML="";
		            a2=a2+die;
		            if(a2==27)
		            {
			            content1=pathA[a2].innerHTML;
		                winA++;
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
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathA[a2].innerHTML = "A";
        	                countB--;
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
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathA[a2].innerHTML = "A";
        	                countB--;
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
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathA[a1].innerHTML = "A";
        	            countB--;
        	        }
                }
                
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
                    }
                    else if(content1=="A")
        		    {
        			    pathA[a2].innerHTML += " "+"A";
        		    }
                    else if(content1=="B")
                    {
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathA[a2].innerHTML = "A";
        	            countB--;
                    } 
                    win(); 
                }
		        else if(a2>27)
		        {
			        a2=a2-die;
			        pathA[a2].innerHTML="";
		            a1=a1+die;
		            if(a1==27)
		            {
			            content1=pathA[a1].innerHTML;
		                winA++;
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
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathA[a1].innerHTML = "A";
        	                countB--;
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
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathA[a1].innerHTML = "A";
        	                countB--;
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
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathA[a2].innerHTML = "A";
        	            countB--;
        	        }
                }
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
                }
                else if(content1=="A")
        		{
        			pathA[a2].innerHTML += " "+"A";
        		}
                else if(content1=="B")
                {
        	        document.getElementById(""+content1+"1").classList.remove("vanish");
        	        pathA[a2].innerHTML = "A";
        	        countB--;
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
        	        document.getElementById(""+content1+"1").classList.remove("vanish");
        	        pathA[a2].innerHTML = "A";
        	        countB--;
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
            }
            else if(content1=="A")
            {
        	    document.getElementById(""+content1+"1").classList.remove("vanish");
        	    pathB[b1].innerHTML = "B";
        	    countA--;
            }
            win(); 
        }
		else if(b1>27)
		{
			b1=b1-die;
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
        	    document.getElementById(""+content1+"1").classList.remove("vanish");
        	    pathB[b1].innerHTML = "B";
        	    countA--;
            }
		}
    }
    else if(countB>=2)
    {
        if(winB==0)
        {
        	if(b1==b2)
        	{
                
		        b1=b1+die;
		        if(b1==27)
		        {
		  	        content1=pathB[b1].innerHTML;
		            winB++;
		            if(content1=="")
        	        {
        	            pathB[b1].innerHTML = "B";
                    }              
                    else if(content1=="A")
                    {
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathA[b1].innerHTML = "B";
        	            countA--;
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
                        }                      
                        else if(content1=="A")
                        {
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathB[b2].innerHTML = "B";
        	                countA--;
                        }
                        win(); 
                    }
		            else if(b2>27)
		            {
			            b2=b2-die;
			            pathB[b2].innerHTML = "B";
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
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathB[b2].innerHTML = "B";
        	                countA--;
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
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathB[b1].innerHTML = "B";
        	            countA--;
        	        }
                }
            }
            else
            {
            	pathB[b1].className="glow";
            	pathB[b2].className="glow";
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
                    }
                    else if(content1=="B")
        		    {
        			    pathB[b1].innerHTML += " "+"B";
        		    }
                    else if(content1=="A")
                    {
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathB[b1].innerHTML = "B";
        	            countA--;
                    } 
                    win(); 
                }
		        else if(b1>27)
		        {
			        b1=b1-die;
			        pathB[b1].innerHTML="";
		            b2=b2+die;
		            if(b2==27)
		            {
			            content1=pathB[b2].innerHTML;
		                winB++;
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
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathB[b2].innerHTML = "B";
        	                countB--;
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
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathB[b2].innerHTML = "B";
        	                countA--;
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
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathB[b1].innerHTML = "A";
        	            countA--;
        	        }
                }
                pathB[b2].classList.remove("glow");
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
                    }
                    else if(content1=="B")
        		    {
        			    pathB[b2].innerHTML += " "+"B";
        		    }
                    else if(content1=="A")
                    {
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathB[b2].innerHTML = "B";
        	            countA--;
                    } 
                    win(); 
                }
		        else if(b2>27)
		        {
			        b2=b2-die;
			        pathB[b2].innerHTML="";
		            b1=b1+die;
		            if(b1==27)
		            {
			            content1=pathB[b1].innerHTML;
		                winB++;
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
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathB[b1].innerHTML = "B";
        	                countA--;
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
        	                document.getElementById(""+content1+"1").classList.remove("vanish");
        	                pathB[b1].innerHTML = "B";
        	                countA--;
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
        	            document.getElementById(""+content1+"1").classList.remove("vanish");
        	            pathB[b2].innerHTML = "B";
        	            countA--;
        	        }
                }
                pathB[b1].classList.remove("glow");
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
                }
                else if(content1=="B")
        		{
        			pathB[b1].innerHTML += " "+"B";
        		}
                else if(content1=="A")
                {
        	        document.getElementById(""+content1+"1").classList.remove("vanish");
        	        pathB[b2].innerHTML = "B";
        	        countA--;
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
        	        document.getElementById(""+content1+"1").classList.remove("vanish");
        	        pathB[b2].innerHTML = "B";
        	        countA--;
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
        			    document.getElementById(""+content+"1").classList.remove("vanish");
        			    pathA[0].innerHTML = "A";
        			    countB--;
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
        			        document.getElementById(""+content+"1").classList.remove("vanish");
        			        pathA[0].innerHTML = "A";
        			        countB--;
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
        			        document.getElementById(""+content+"1").classList.remove("vanish");
        			        pathA[0].innerHTML = "A";
        			        countB--;
        		        }
        		        button.classList.remove("vanish");
        		    }	
        	    }
        	} 
        	else if(countA>2)
        	{
        		if(player=="A")
        		{
        			workA();
        		}
        		else if(player=="B")
        		{
        			workB();
        		}
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
        			    document.getElementById(""+content+"1").classList.remove("vanish");
        			    pathB[0].innerHTML = "B";
        			    countA--;
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
        		        else if(content=="B")
        		        {
        			        document.getElementById(""+content+"1").classList.remove("vanish");
        			        pathB[0].innerHTML = "B";
        			        countA--;
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
        			        document.getElementById(""+content+"1").classList.remove("vanish");
        			        pathB[0].innerHTML = "B";
        			        countA--;
        		        }
        		        button.classList.remove("vanish");
        		    }	
        	    }
        	} 
        	else if(countB>2)
        	{
        		if(player=="A")
        		{
        			workA();
        		}
        		else if(player=="B")
        		{
        			workB();
        		}
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