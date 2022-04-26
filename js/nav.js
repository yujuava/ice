
    window.onscroll=function(){
        let bodys = document.getElementsByTagName("body");
            // if(window.innerWidth > 992){
            if (window.scrollY >= "100"){
                document.getElementById("contentLong").style.width="90"+"vw";
                document.getElementById("logoLong").style.display="block";
            }else if(window.innerWidth > 992){
                document.getElementById("contentLong").style.width="40"+"vw";
                document.getElementById("logoLong").style.display="none";
            }
        // }
    }

    window.onresize=onscroll;
 
    // window.addEventListener('resize', function(){
    //     window.onscroll=function(){
    //         let bodys = document.getElementsByTagName("body");
    //             if(window.innerWidth > 992){
    //             if (window.scrollY >= "100"){
    //                 document.getElementById("contentLong").style.width="90"+"vw";
    //                 document.getElementById("logoLong").style.display="block";
    //             }else{
    //                 document.getElementById("contentLong").style.width="40"+"vw";
    //                 document.getElementById("logoLong").style.display="none";
    //             }
    //         }
    //     }
    //  });