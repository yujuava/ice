function $id(id){
    return document.getElementById(id)
}
function showPay(){
    $id('payDetail').style.display="flex";
}
function closePayDetail(){
    $id('payDetail').style.display="none";
}
function init(){
    $id('showForm').onclick= showPay;
    $id('closePay').onclick= closePayDetail;
    
}
window.addEventListener('load',init,false)