const spanish = {
    es: document.querySelectorAll(".es"),
    la: document.querySelectorAll(".la"),
    sonlas: document.querySelectorAll(".sonlas"),

    una: document.querySelectorAll(".una"),
    dos: document.querySelectorAll(".dos"),
    tres: document.querySelectorAll(".tres"),
    cuatro: document.querySelectorAll(".cuatro"),
    cinco: document.querySelectorAll(".cinco"),
    seis: document.querySelectorAll(".seis"),
    siete: document.querySelectorAll(".siete"),
    ocho: document.querySelectorAll(".ocho"),
    nueve: document.querySelectorAll(".nueve"),
    diez: document.querySelectorAll(".diez"),
    once: document.querySelectorAll(".once"),
    doce: document.querySelectorAll(".doce"),

    mediodia: document.querySelectorAll(".mediodia"),
    medianoche: document.querySelectorAll(".medianoche"),

    enpunto: document.querySelectorAll(".enpunto"),

    y: document.querySelectorAll(".y"),
    menos: document.querySelectorAll(".menos"),

    cincoM: document.querySelectorAll(".cincoM"),
    diezM: document.querySelectorAll(".diezM"),
    cuarto: document.querySelectorAll(".cuarto"),
    veinte: document.querySelectorAll(".veinte"),
    veinticinco: document.querySelectorAll(".veinticinco"),

    media: document.querySelectorAll(".media"),

    manana: document.querySelectorAll(".manana"),
    tarde: document.querySelectorAll(".tarde"),
    noche: document.querySelectorAll(".noche"),
}

function getSpanishClock() {
    var hourArray = [];
    removeClass();

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var showHours = hours % 24; 

    if(minutes >= 35){
        if(showHours != 24) showHours = showHours + 1;
        else showHours = 1;
    }

    if(showHours == 0) hourArray.push(...spanish['es'],...spanish['medianoche']);
    else if(showHours == 1 || showHours == 13) hourArray.push(...spanish['es'], ...spanish['la'], ...spanish['una']);
    else if(showHours == 2 || showHours == 14) hourArray.push(...spanish['sonlas'], ...spanish['dos']);
    else if(showHours == 3 || showHours == 15) hourArray.push(...spanish['sonlas'], ...spanish['tres']);
    else if(showHours == 4 || showHours == 16) hourArray.push(...spanish['sonlas'], ...spanish['cuatro']);
    else if(showHours == 5 || showHours == 17) hourArray.push(...spanish['sonlas'], ...spanish['cinco']);
    else if(showHours == 6 || showHours == 18) hourArray.push(...spanish['sonlas'], ...spanish['seis']);
    else if(showHours == 7 || showHours == 19) hourArray.push(...spanish['sonlas'], ...spanish['siete']);
    else if(showHours == 8 || showHours == 20) hourArray.push(...spanish['sonlas'], ...spanish['ocho']);
    else if(showHours == 9 || showHours == 21) hourArray.push(...spanish['sonlas'], ...spanish['nueve']);
    else if(showHours == 10 || showHours == 22) hourArray.push(...spanish['sonlas'], ...spanish['diez']);
    else if(showHours == 11 || showHours == 23) hourArray.push(...spanish['sonlas'], ...spanish['once']);
    else if(showHours == 12 && minutes < 5) hourArray.push(...spanish['es'],...spanish['mediodia']);
    else if(showHours == 12) hourArray.push(...spanish['sonlas'],...spanish['doce']);

    if(showHours >= 1 && showHours < 12 ) hourArray.push(...spanish['manana']);
    else if(showHours >= 13 && showHours < 19) hourArray.push(...spanish['tarde']);
    else hourArray.push(...spanish['noche']);

    if (minutes < 5) hourArray.push(...spanish['enpunto']);
    else if (minutes >= 5 && minutes < 10) hourArray.push(...spanish['y'],...spanish['cincoM']);
    else if (minutes >= 10 && minutes < 15) hourArray.push(...spanish['y'],...spanish['diezM']);
    else if (minutes >= 15 && minutes < 20) hourArray.push(...spanish['y'], ...spanish['cuarto']);
    else if (minutes >= 20 && minutes < 25) hourArray.push(...spanish['y'],...spanish['veinte']);
    else if (minutes >= 25 && minutes < 30) hourArray.push(...spanish['y'],...spanish['veinticinco']);

    else if (minutes >= 30 && minutes < 35) hourArray.push(...spanish['y'], ...spanish['media']);

    else if (minutes >= 35 && minutes < 40) hourArray.push(...spanish['menos'],...spanish['veinticinco']);
    else if (minutes >= 40 && minutes < 45) hourArray.push(...spanish['menos'],...spanish['veinte']);
    else if (minutes >= 45 && minutes < 50) hourArray.push(...spanish['menos'],...spanish['cuarto']);
    else if (minutes >= 50 && minutes < 55) hourArray.push(...spanish['menos'],...spanish['diezM']);
    else if (minutes >= 55 && minutes < 60) hourArray.push(...spanish['menos'],...spanish['cincoM']);
    
    addToElements(hourArray);
}

function removeClass() {
    for (const key in spanish) {
        if (spanish[key] instanceof NodeList) {
            spanish[key].forEach(element => {
                element.classList.remove('light');
            });
        }
    }
}


function addToElements(elements){
    elements.forEach(x => x.classList.add('light'));
}

setInterval(getSpanishClock, 1000);

export { spanish, getSpanishClock };
