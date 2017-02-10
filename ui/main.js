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
submit.onclick=function(){
var comments=document.getElementById("comment");
alert(comments.innerText);
comments='<li>'+comments.innerText+"<li>";
var listofcomments=document.getElementById("usercomments");
listofcomments.innerHTML=comments;
}