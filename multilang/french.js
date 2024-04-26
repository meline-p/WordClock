const french = {
    une: document.querySelectorAll(".une"),
    deux: document.querySelectorAll(".deux"),
    trois: document.querySelectorAll(".trois"),
    quatre: document.querySelectorAll(".quatre"),
    cinq: document.querySelectorAll(".cinq"),
    six: document.querySelectorAll(".six"),
    sept: document.querySelectorAll(".sept"),
    huit: document.querySelectorAll(".huit"),
    neuf: document.querySelectorAll(".neuf"),
    dix: document.querySelectorAll(".dix"),
    onze: document.querySelectorAll(".onze"),

    midi: document.querySelectorAll(".midi"),
    minuit: document.querySelectorAll(".minuit"),
    matin: document.querySelectorAll(".matin"),
    aprem: document.querySelectorAll(".aprem"),
    soir: document.querySelectorAll(".soir"),

    heure: document.querySelectorAll(".heure"),
    heures: document.querySelectorAll(".heures"),
    
    moins: document.querySelectorAll(".moins"),
    le: document.querySelectorAll(".le"),
    quart: document.querySelectorAll(".quart"),
    et: document.querySelectorAll(".et"),
    demie: document.querySelectorAll(".demie"),
    
    cinqM: document.querySelectorAll(".cinq-m"),
    dixM: document.querySelectorAll(".dix-m"),
    vingt: document.querySelectorAll(".vingt"),
    vingtCinq: document.querySelectorAll(".vingt-cinq"),
}

function getFrenchClock() {
    var hourArray = [];
    removeClass();

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var showHours = hours % 24; 

    if(minutes >= 35){
        if(showHours != 24) showHours = showHours + 1;
        else showHours = 1;
    }

    if(showHours == 0) hourArray.push(...french['minuit']);
    else if(showHours == 1 || showHours == 13) hourArray.push(...french['une'], ... french['heure']);
    else if(showHours == 2 || showHours == 14) hourArray.push(...french['deux'], ... french['heures']);
    else if(showHours == 3 || showHours == 15) hourArray.push(...french['trois'], ... french['heures']);
    else if(showHours == 4 || showHours == 16) hourArray.push(...french['quatre'], ... french['heures']);
    else if(showHours == 5 || showHours == 17) hourArray.push(...french['cinq'], ... french['heures']);
    else if(showHours == 6 || showHours == 18) hourArray.push(...french['six'], ... french['heures']);
    else if(showHours == 7 || showHours == 19) hourArray.push(...french['sept'], ... french['heures']);
    else if(showHours == 8 || showHours == 20) hourArray.push(...french['huit'], ... french['heures']);
    else if(showHours == 9 || showHours == 21) hourArray.push(...french['neuf'], ... french['heures']);
    else if(showHours == 10 || showHours == 22) hourArray.push(...french['dix'], ... french['heures']);
    else if(showHours == 11 || showHours == 23) hourArray.push(...french['onze'], ... french['heures']);
    else if(showHours == 12) hourArray.push(...french['douze']);

    if(showHours >= 1 && showHours < 12 ) hourArray.push(...french['matin']);
    else if(showHours >= 13 && showHours < 19) hourArray.push(...french['aprem']);
    else hourArray.push(...french['soir']);

    if (minutes >= 5 && minutes < 10) hourArray.push(...french['cinqM']);
    else if (minutes >= 10 && minutes < 15) hourArray.push(...french['dixM']);
    else if (minutes >= 15 && minutes < 20) hourArray.push(...french['et'], ...french['quart']);
    else if (minutes >= 20 && minutes < 25) hourArray.push(...french['vingt']);
    else if (minutes >= 25 && minutes < 30) hourArray.push(...french['vingt'], ...french['cinqM']);

    else if (minutes >= 30 && minutes < 35) hourArray.push(...french['et'], ...french['demie']);

    else if (minutes >= 35 && minutes < 40) hourArray.push(...french['moins'], ...french['vingt'], ...french['cinqM']);
    else if (minutes >= 40 && minutes < 45) hourArray.push(...french['moins'], ...french['vingt']);
    else if (minutes >= 45 && minutes < 50) hourArray.push(...french['moins'], ...french['le'], ...french['quart']);
    else if (minutes >= 50 && minutes < 55) hourArray.push(...french['moins'], ...french['dixM']);
    else if (minutes >= 55 && minutes < 60) hourArray.push(...french['moins'], ...french['cinqM']);
    
   
    addToElements(hourArray);
}

function removeClass() {
    for (const key in french) {
        if (french[key] instanceof NodeList) {
            french[key].forEach(element => {
                element.classList.remove('light');
            });
        }
    }
}



function addToElements(elements){
    elements.forEach(x => x.classList.add('light'));
}

setInterval(getFrenchClock, 1000);

export { french, getFrenchClock };
