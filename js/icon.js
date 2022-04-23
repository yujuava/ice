function $id(id){
    return document.getElementById(id)
}
function iconsclick(e){
        if(e.target.style.color=="#FF3333"){
            e.target.style.opacity="0";
        }else{
            e.target.style.color="#FF3333";
        }    
}
function init(){
    let icons = document.querySelectorAll(".fa-heart");
    for(i=0;i<icons.length;i++){
        icons[i].onclick=iconsclick;
    }
}
window.addEventListener('load',init,false)