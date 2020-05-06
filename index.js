var v = document.getElementById("myVideo");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var i;

v.addEventListener("play", function() {
    i = window.setInterval(function() {ctx.drawImage(v,0,0,800,450)},20);
}, false);
v.addEventListener("pause", function() {window.clearInterval(i);}, false);
v.addEventListener("ended", function() {clearInterval(i);}, false); 

v.addEventListener('play', e => play())

v.addEventListener("timeupdate", function(){
    // 監聽目前播放時間
    var timeDisplay;
    timeDisplay = Math.floor(v.currentTime);
    console.log(Math.floor(v.currentTime));
    console.log(v.currentTime);
    if(v.currentTime > 5){
        $('.myPhoto').css('display', 'block');
    }
    if(v.currentTime > 6.5){
        $('.myPhoto').css('display', 'none');
    }

})

v.addEventListener("ended",function(){
    $("#myPause").hide();
    $("#myPlay").show();
})

// 取得控制video的button
document.querySelector('#myPlay')
    .addEventListener('click', event => {
        // v.paused == false ? v.pause() : v.play()
        v.play();
        $("#myPlay").hide();
        $("#myPause").show();
    })

    // 取得控制video的button
document.querySelector('#myPause')
.addEventListener('click', event => {
    v.pause();
    // v.play();
    $("#myPause").hide();
    $("#myPlay").show();
})