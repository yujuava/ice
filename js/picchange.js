function changePic(e){
    document.getElementById('bigPic').src=e.target.src;
    $id('bigPic').style.opacity="1"
}
function $id(id){
    return document.getElementById(id)
}
var num=6; 
var timerId;
countDown();
    timerId =window.setInterval(countDown,1800)//計時器單位是毫秒
function countDown(){
    num--;
    if(num==5){
        $id('bigPic').src= $id('small_appliance').src;
        $id('bigPic').style.opacity="1"
    }
    if(num==4){
        $id('bigPic').style.opacity="0.5"
    }
    if(num==3){
        $id('bigPic').src= $id('small_health').src;
        $id('bigPic').style.opacity="1"
    }
    if(num==2){
        $id('bigPic').style.opacity="0.5"
    }
    if(num==1){
        $id('bigPic').src= $id('small_three').src;
        $id('bigPic').style.opacity="1"
    }
    if(num==0){
        $id('bigPic').style.opacity="0.5"
        num=6;
    }

}

function init(){
    let smalls = document.querySelectorAll('.small img');
    for(i=0;i<smalls.length;i++){
        smalls[i].onmouseover=changePic;
    }
}
window.addEventListener('load',init,false)