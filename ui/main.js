console.log('Loaded!');
/*alert("from MainJS");
var main=document.getElementById('main-text');
main.innerHTML="New Value to be displayed";
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};*/

//var commentsarray=[];
var submit=document.getElementById("submit");
var comments=document.getElementById("comment").value;
 alert("comment value before click : "+comments);
submit.onclick=function(){
    var comments=document.getElementById("comment").value;
   // alert("comment value after click : "+comments);
var request=new XMLHttpRequest();
request.onreadystatechange=function()
{
    if(request.readyState == XMLHttpRequest.DONE)
    {
        if(request.status==200)
        {
            var commentlist=request.responseText;
            alert("printing commentlist before parsing"+commentlist);
            commentlist=JSON.parse(commentlist);
             alert("printing commentlist After parsing"+commentlist);
            var list='';
            for (var i=0;i<commentlist.length;i++)
            {
                list+='<li>' + commentlist[i]+ '</li>';
            }
            var listofcomments=document.getElementById("usercomments");
            listofcomments.innerHTML=list;
        }
    }
};
request.open('GET',"http://navanetham.imad.hasura-app.io/getcomments/"+comments,true);
request.send(null);
};