function closeDetail(){
    document.getElementById("detailChoose").style.display="none";
    var closes = document.getElementsByTagName("input");
    for(let i=0;i<closes.length;i++){
        if(closes[i].type=="checkbox")
        {closes[i].checked =false; 
        }
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
