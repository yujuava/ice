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