function $id(id){
    return document.getElementById(id)
}
let itemNum = 0;
function closebox(){
    document.getElementById("detailChoose").style.display="none";
    $id('chooseItems').style.display="block";
    itemNum++;
    $id('chooseItems').innerHTML=itemNum;
    console.log("我在哪")
        
}
function init(){
    $id('addShoppingCar').onclick=closebox;
    
}
window.addEventListener("load",init,false);