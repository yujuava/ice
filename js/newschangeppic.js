$(function () {
    let divWidth = $('#sliderBoard').width();
    let imgCount = $('#content li').length;
    // alert(imgCount)

    for(let i = 1; i < imgCount; i++){
        $('#contentButton').append(`<li></li>`);
    }
    $('#contentButton li:nth-child(1)').addClass('clickMe');

    $('#content').width(divWidth * imgCount);   // ul 的寬度
    $('#content li').width(divWidth);           // li 的寬度

    let index;
    $('#contentButton li').click(function(){
        index = $(this).index();

        $('#content').stop(true).animate({
            left: divWidth * index * -1,
        },1500);

        $(this).addClass('clickMe');
        $('#contentButton li').not(this).removeClass('clickMe');
    });

    let n=0;
    setInterval(auto,2500);
    
    function auto(){
        n++;
        if(n>=6){
            n=0;
            $('#content').css({
                left: divWidth * 0,
            });
        }
        if(n<7){
            $('#content').animate({
                left: divWidth * n * -1,
            },1500);
            $('#contentButton li').addClass('clickMe');
        }
    }
});