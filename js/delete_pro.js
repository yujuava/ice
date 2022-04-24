function $id(id){
    return document.getElementById(id)
}

function init(){
    let closePros = document.querySelectorAll('.collect_close');
    for(i=0;i<closePros.length;i++){
        closePros[i].onclick=function(){
            document.getElementById('tab').deleteRow(1)
        }
    }
}
window.addEventListener("load",init,false);