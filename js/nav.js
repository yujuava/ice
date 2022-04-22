
    window.onscroll=function(){
        let bodys = document.getElementsByTagName("body");
        // for(i=0;i<bodys.length;i++){
        //     if(bodys[i].style.width>767){
                // if(document.getElementsByTagName("body"))
                if(window.innerWidth > 767){
                if (window.scrollY >= "100") {
                    document.getElementById("contentLong").style.width="90"+"vw";
                    document.getElementById("logoLong").style.display="block";
                }else{
                    document.getElementById("contentLong").style.width="40"+"vw";
                    document.getElementById("logoLong").style.display="none";
                }
            }
        // }
    }