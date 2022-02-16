import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
        console.log('played the video!');
    });

player.on('timeupdate', throttle(function(data) {
    let time = 0;
    time += data.seconds;
    
    localStorage.setItem("videoplayer-current-time", JSON.stringify(time));
},
1000));

const secondsJSON = localStorage.getItem("videoplayer-current-time");
const parsedSec = JSON.parse(secondsJSON);
console.log(parsedSec);

player.setCurrentTime(parsedSec || 0);
