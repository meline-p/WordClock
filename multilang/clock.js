import { french, getFrenchClock } from './french.js';
import { english, getEnglishClock } from './english.js';
import { korean, getKoreanClock } from './korean.js';
import { chinese, getChineseClock } from './chinese.js';
import { spanish, getSpanishClock } from './spanish.js';

function initHorloge(lang) {
    let timeData;

    switch(lang) {
        case 'french': 
            timeData = french;
            break;
        case 'english': 
            timeData = english;
            break;
        case 'korean': 
            timeData = korean;
            break;
        case 'chinese': 
            timeData = chinese;
            break;
        case 'spanish': 
            timeData = spanish;
            break;
        default:
            timeData = french;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const frenchLink = document.getElementById('french-link');
    const englishLink = document.getElementById('english-link');
    const koreanLink = document.getElementById('korean-link');
    const chineseLink = document.getElementById('chinese-link');
    const spanishLink = document.getElementById('spanish-link');

    frenchLink.addEventListener('click', function(event) {
        event.preventDefault();
        initHorloge('french');
        window.location.href = 'index.html';
    });

    englishLink.addEventListener('click', function(event) {
        event.preventDefault();
        initHorloge('english');
        window.location.href = 'english.html';
    });

    koreanLink.addEventListener('click', function(event) {
        event.preventDefault();
        initHorloge('korean');
        window.location.href = 'korean.html';
    });

    chineseLink.addEventListener('click', function(event) {
        event.preventDefault();
        initHorloge('chinese');
        window.location.href = 'chinese.html';
    });

    spanishLink.addEventListener('click', function(event) {
        event.preventDefault();
        initHorloge('spanish');
        window.location.href = 'spanish.html';
    });
});
