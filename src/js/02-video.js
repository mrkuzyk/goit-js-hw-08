import Player from '@vimeo/player';    

var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

//? функція, чка відслідковує час(секундно) на відео і заносить дані в локалСтор
const onPlay = function (data) {
    const dataSecond = data.seconds;
    localStorage.setItem('videoplayer-current-time', dataSecond);
    // console.log('videoplayer-current-time', dataSecond);
};

player.on('timeupdate', throttle(onPlay), 2000); //? до бібліотечної функції добавили "тротл", щоб раз в секунду слідкувало за часом на відео 

//? функція готова з бібліотеки (за виключенням вставки локалСтор....)
player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
