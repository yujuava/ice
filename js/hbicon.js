function $id(id){
    return document.getElementById(id)
}

function init(){
    $id('openhb').onclick=function(){
        $id('openhb').style.display="none";
        $id('closehb').style.display="block";
    }
    $id('closehb').onclick=function(){
        $id('closehb').style.display="none";
        $id('openhb').style.display="block";
    }

}
window.addEventListener("load",init,false);