var v = document.getElementById("myVideo");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var i;

v.addEventListener("play", function() {i = window.setInterval(function() {ctx.drawImage(v,5,5,720,405)},20);}, false);
v.addEventListener("pause", function() {window.clearInterval(i);}, false);
v.addEventListener("ended", function() {clearInterval(i);}, false); 

v.addEventListener('play', e => play())

// 取得控制video的button
document.querySelector('button')
    .addEventListener('click', event => {
        // v.paused == false ? v.pause() : v.play()
        v.play();
        $('.myPhoto').css('display', 'block');
        setTimeout(() => {
            $('.square').css('display', 'block');
            setTimeout(() => {
                $('.square').css('display', 'none');
            },3000)
        },3000)
        setTimeout(() => {
            $('.myPhoto').css('display', 'none');
        },3000)
    })
    // setTimeout(() => {
    //     $('.square').css('display', 'block');
    //     setTimeout(() => {
    //         $('.square').css('display', 'none');
    //     },3000)
    // },3000)