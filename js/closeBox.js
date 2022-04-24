function $id(id){
    return document.getElementById(id)
}
function closebox(){
    document.getElementById("detailChoose").style.display="none";
    $id('chooseItems').style.display="block";
    $id('chooseItems').innerHTML="1";
}
function init(){
    $id('addShoppingCar').onclick=closebox;
    
}
window.addEventListener("load",init,false);