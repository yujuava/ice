function $id(id){
    return document.getElementById(id)
}
function closeDetail(){
    document.getElementById("detailChoose").style.display="none";
    var closes = document.getElementsByTagName("input");
    for(let i=0;i<closes.length;i++){
        if(closes[i].type=="checkbox")
        {closes[i].checked =false; 
        }
    }
}
var num=4; 
var timerId;
countDown();
    timerId =window.setInterval(countDown,2000)//計時器單位是毫秒
function countDown(){
    num--;
    if(num==3){
        $id("a").classList.add("opcupy");
        $id("c").classList.remove("opcupy");
    }
    if(num==2){
        $id("a").classList.remove("opcupy");
        $id("b").classList.add("opcupy");
    }
    if(num==1){
        $id("b").classList.remove("opcupy");
        $id("c").classList.add("opcupy");
        num=4;
    }
}
function init(){
    document.getElementById("close").onclick=closeDetail;
    var opens = document.getElementsByClassName("open");
    for(i=0;i<=opens.length;i++){
        opens[i].onclick=function(){
            document.getElementById("detailChoose").style.display="flex";
        }
    }
}
window.addEventListener("load",init,false);
