function doFirst(){
    // 先跟 HTML 畫面產生關聯，再建事件聆聽功能
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    for(let i = 0; i < 100; i++){
        let interval = i * 50;

        // 水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        // context.fillText(interval, 0, interval);        

        // 垂直線
        context.moveTo(interval,             0);
        context.lineTo(interval, canvas.height);
        // context.fillText(interval, interval, 8);
        
    }
    // context.strokeStyle='rgba(0,0,0,0.3)';
    // context.stroke();

    context.strokeStyle='#3c6b8033';
    context.beginPath();
    context.lineWidth=7;
    context.moveTo(0, 200);
    context.lineTo(150, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(0, 230);
    context.lineTo(200, 230);
    context.stroke();
    
    context.beginPath();
    context.moveTo(0, 260);
    context.lineTo(250, 260);
    context.stroke();
    
    context.beginPath();
    context.moveTo(0, 290);
    context.lineTo(270, 290);
    context.stroke();

    context.beginPath();
    context.moveTo(0, 320);
    context.lineTo(240, 320);
    context.stroke();

    context.beginPath();
    context.moveTo(0, 350);
    context.lineTo(210, 350);
    context.stroke();

    context.beginPath();
    context.moveTo(0, 380);
    context.lineTo(180, 380);
    context.stroke();    
    





}
window.addEventListener('load',doFirst);