const english = {
    one: document.querySelectorAll(".one"),
    two: document.querySelectorAll(".two"),
    three: document.querySelectorAll(".three"),
    four: document.querySelectorAll(".four"),
    five: document.querySelectorAll(".five"),
    sixx: document.querySelectorAll(".sixx"),
    seven: document.querySelectorAll(".seven"),
    eight: document.querySelectorAll(".eight"),
    nine: document.querySelectorAll(".nine"),
    ten: document.querySelectorAll(".ten"),
    eleven: document.querySelectorAll(".eleven"),
    twelve: document.querySelectorAll(".twelve"),
    
    fiveM: document.querySelectorAll(".five-m"),
    tenM: document.querySelectorAll(".ten-m"),
    fifteenM: document.querySelectorAll(".fifteen-m"),
    twentyM: document.querySelectorAll(".twenty-m"),
    twentyFiveM: document.querySelectorAll(".twenty-five-m"),
    thirtyM: document.querySelectorAll(".thirty-m"),
    
    mins: document.querySelectorAll(".minutes"),
    past: document.querySelectorAll(".past"),
    to: document.querySelectorAll(".to"),
    oclock: document.querySelectorAll(".oclock"),

    am: document.querySelectorAll(".am"),
    pm: document.querySelectorAll(".pm"),

}

function getEnglishClock() {
    var hourArray = [];
    removeClass();

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var showHours = hours % 24; 

    if(showHours == undefined) return false;

    if(minutes >= 35){
        if(showHours != 24) showHours = showHours + 1;
        else showHours = 1;
    }

    if(showHours == 0 || showHours == 12) hourArray.push(...english['twelve']);
    else if(showHours == 1 || showHours == 13) hourArray.push(...english['one']);
    else if(showHours == 2 || showHours == 14) hourArray.push(...english['two']);
    else if(showHours == 3 || showHours == 15) hourArray.push(...english['three']);
    else if(showHours == 4 || showHours == 16) hourArray.push(...english['four']);
    else if(showHours == 5 || showHours == 17) hourArray.push(...english['five']);
    else if(showHours == 6 || showHours == 18) hourArray.push(...english['sixx']);
    else if(showHours == 7 || showHours == 19) hourArray.push(...english['seven']);
    else if(showHours == 8 || showHours == 20) hourArray.push(...english['eight']);
    else if(showHours == 9 || showHours == 21) hourArray.push(...english['nine']);
    else if(showHours == 10 || showHours == 22) hourArray.push(...english['ten']);
    else if(showHours == 11 || showHours == 23) hourArray.push(...english['eleven']);

    if(showHours >= 0 && showHours < 12 ) hourArray.push(...english['am']);
    else hourArray.push(...english['pm']);

    if(minutes < 5) hourArray.push(...english['oclock']);
    else if (minutes >= 5 && minutes < 10) hourArray.push(...english['fiveM'], ...english['mins'], ... english['past']);
    else if (minutes >= 10 && minutes < 15) hourArray.push(...english['tenM'], ...english['mins'], ... english['past']);
    else if (minutes >= 15 && minutes < 20) hourArray.push(...english['fifteenM'], ...english['mins'], ... english['past']);
    else if (minutes >= 20 && minutes < 25) hourArray.push(...english['twentyM'], ...english['mins'], ... english['past']);
    else if (minutes >= 25 && minutes < 30) hourArray.push(...english['twentyFiveM'], ...english['mins'], ... english['past']);

    else if (minutes >= 30 && minutes < 35) hourArray.push(...english['thirtyM'], ...english['mins'], ... english['past']);

    else if (minutes >= 35 && minutes < 40) hourArray.push(...english['twentyFiveM'], ...english['mins'], ... english['to']);
    else if (minutes >= 40 && minutes < 45) hourArray.push(...english['twentyM'], ...english['mins'], ... english['to']);
    else if (minutes >= 45 && minutes < 50) hourArray.push(...english['fifteenM'], ...english['mins'], ... english['to']);
    else if (minutes >= 50 && minutes < 55) hourArray.push(...english['tenM'], ...english['mins'], ... english['to']);
    else if (minutes >= 55 && minutes < 60) hourArray.push(...english['fiveM'], ...english['mins'], ... english['to']);
    

    addToElements(hourArray);
}

function removeClass() {
    for (const key in english) {
        if (english[key] instanceof NodeList) {
            english[key].forEach(element => {
                element.classList.remove('light');
            });
        }
    }
}

function addToElements(elements){
    elements.forEach(x => x.classList.add('light'));
}

setInterval(getEnglishClock, 1000);

export { english, getEnglishClock };
