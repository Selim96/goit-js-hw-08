const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
        console.log('played the video!');
    });

player.on('timeupdate', _.throttle(function(data) {
    // data is an object containing properties specific to that event
    let time = 0;
    time += data.seconds;
    console.log(time);
    localStorage.setItem("videoplayer-current-time", time);
}, 1000));

// player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });

// var throttle = require('lodash.throttle');

// const thr = _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
// }, 300);
// console.log(thr);

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );