function closeDetail(){
    document.getElementById("detailChoose").style.display="none";
    var closes = document.getElementsByTagName("input");
    for(let i=0;i<closes.length;i++){
        if(closes[i].type=="checkbox")
        {closes[i].checked =false; 
        }
    // closes[i].value=false;  
}
}
function openDetail(){
    document.getElementById("detailChoose").style.display="flex";
}

function init(){
    document.getElementById("close").onclick=closeDetail;
    // var opens = document.getElementsByTagName("button");
    // for(i=0;i<opens.length;i++){
    // document.getElementsByTagName("button")[i].onclick =openDetail}
    
    var opens = document.getElementsByClassName("open");
    for(i=0;i<opens.length;i++){
    opens[i].onclick=openDetail}
    // document.getElementsByClassName("open")[i].onclick =openDetail}

    // var opens = document.getElementsByTagName("button");
    // for(i=0;i<opens.length;i++){
    //     opens[i].onclick = openDetail;
    // }
}
window.addEventListener("load",init,false);
