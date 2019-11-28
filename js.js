var node=document.getElementById("main");
var gen=document.getElementById("Generate2");
var arr=Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
function getRandomeNum(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
gen.addEventListener
("click",function()
{
    var mai=document.getElementById("main");
    mai.innerHTML="";
   var value1=document.getElementById("Generate").value;
    var ar=[];
    var a='';
    for(var i=0;i<value1;i++)
    {
        var n=getRandomeNum(0,25);
        var Listelement=arr[n];
        a+=Listelement;
        var input=document.createElement("input");
        input.setAttribute("type","button");
        input.setAttribute("value",Listelement);
        input.setAttribute("id",Listelement);
        var mai=document.getElementById("main");
        mai.appendChild(input);
        ar[i]=document.getElementById(Listelement);      
    }
 var rr=document.getElementsByName("input");
 for(var i=0;i<value1;i++)
 {
     ar[i].addEventListener("click",function(e){
        var im=document.getElementById("image");
         im.innerHTML="";
         var imee=document.createElement("img");
         imee.setAttribute("src",'images/'+e.target.value+'.jpg');
        document.getElementById("image").appendChild(imee);
         
     });
 }
});


