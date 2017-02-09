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
var submit=document.getElementbyId("submit");
submit.onclick=function(){
var comments=document.getElementbyId("comment");
alert(comments);
comments='<li>'+comments+"<li>";
var listofcomments=document.getElementbyId("usercomments");
listofcomments.innerHTML=comments;
}