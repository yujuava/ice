function $id(id){
    return document.getElementById(id)
}
var num=4; 
var timerId;
countDown();
    timerId =window.setInterval(countDown,2800)//計時器單位是毫秒
function countDown(){
    num--;
    if(num==3){
        $id("a").classList.add("occur");
        $id("c").classList.remove("occur");
    }
    if(num==2){
        $id("a").classList.remove("occur");
        $id("b").classList.add("occur");
    }
    if(num==1){
        $id("b").classList.remove("occur");
        $id("c").classList.add("occur");
        num=4;
    }
}

if(window.innerWidth > 767){

window.onscroll=function(){
    if (window.scrollY >= "100") {
        document.getElementById("contentLong").style.width="90"+"vw";
        document.getElementById("logoLong").style.display="block";
    }else{
        document.getElementById("contentLong").style.width="40"+"vw";
        document.getElementById("logoLong").style.display="none";
    }
}
}

function init(){
    var scrollFunc=window.onmousewheel=document.onmousewheel;
    if(document.addEventListener){ document.addEventListener('DOMMouseScroll',scrollFunc,false) };
    

    let long = $id(contentLong);
    long.onmousewheel= function(event){
        event = event||window.event;
        if(event.wheelDelta>0||event.detail<0){
            long.style.weight=long.clientWeight-50+"vw";
        }else{
            long.style.weight=long.clientWeight+50+"vw";
        }
        event.preventDefault && event.preventDefault();
        return false;
    }
    
    // window.onscroll=function(){
    //     if (window.scrollY >= "100") {
    //         document.getElementById("contentLong").style.width="90"+"%";
    //         document.getElementById("logoLong").style.display="block";
    //     }else{
    //         document.getElementById("contentLong").style.width="45"+"%";
    //     }
    // }
}

window.addEventListener("load",init,false);
