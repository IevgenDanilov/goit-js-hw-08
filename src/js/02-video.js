// Инициализируй плеер (добавленный как npm пакет) в файле скрипта
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



// Сохраняем время воспроизведения в локальное хранилище.
const storageTime = 'videoplayer-current-time';


// Отслеживаем событие timeupdate - обновление времени воспроизведения.

player.on('play', onPlay);
player.on('seeked', onTimeUpdate);
player.on('timeupdate', throttle(onTimeUpdate, 500));

function onPlay () {
    player.setCurrentTime(localStorage.getItem(storageTime));
};

function onTimeUpdate () {
    player.getCurrentTime().then(seconds => localStorage.setItem(storageTime, seconds));
}

console.log(localStorage);



