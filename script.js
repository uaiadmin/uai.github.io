function playVideo(videoSrc) {
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoSrc;
    videoPlayer.play();
}