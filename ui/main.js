console.log('Loaded!');
alert("from MainJS");
var main=document.getElementById('main-text');
main.innerHTML="New Value to be displayed";
var img=document.getElementById('madi');
var margin=0;
function moveRight(){
    margin=margin+1;
    img.style.marginLeft=margin+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
}