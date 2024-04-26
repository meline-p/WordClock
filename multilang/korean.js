const korean = {
    saebyeok: document.querySelectorAll(".saebyeok"),
    ojeon: document.querySelectorAll(".ojeon"),
    ohu: document.querySelectorAll(".ohu"),
    jeonyeok: document.querySelectorAll(".jeonyeok"),
    bam: document.querySelectorAll(".bam"),

    jajeong: document.querySelectorAll(".jajeong"),
    jeongo: document.querySelectorAll(".jeongo"),

    yeol: document.querySelectorAll(".yeol"),
    han: document.querySelectorAll(".han"),
    du: document.querySelectorAll(".du"),
    se: document.querySelectorAll(".se"),
    ne: document.querySelectorAll(".ne"),
    daseot: document.querySelectorAll(".daseot"),
    yeoseot: document.querySelectorAll(".yeoseot"),
    ilgeop: document.querySelectorAll(".ilgeop"),
    yeodeolp: document.querySelectorAll(".yeodeolp"),
    ahop: document.querySelectorAll(".ahop"),

    si: document.querySelectorAll(".si"),
    bun: document.querySelectorAll(".bun"),

    jeonggak: document.querySelectorAll(".jeonggak"),
    
    ban: document.querySelectorAll(".ban"),
    i: document.querySelectorAll(".i"),
    sam: document.querySelectorAll(".sam"),
    sa: document.querySelectorAll(".sa"),
    o50: document.querySelectorAll(".o50"),
    sib: document.querySelectorAll(".sib"),
    o5: document.querySelectorAll(".o5"),

    ieyo: document.querySelectorAll(".ieyo"),
    yeyo: document.querySelectorAll(".yeyo"),
}

function getKoreanClock() {
    var hourArray = [];
    removeClass();

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var showHours = hours % 24; 

    if(showHours == undefined) return false;

    if(showHours == 0 && minutes < 5) hourArray.push(...korean['jajeong']);
    else if(showHours == 0) hourArray.push(...korean['bam'],...korean['yeol'],...korean['du'], ... korean['si']);
    else if(showHours == 1) hourArray.push(...korean['saebyeok'],...korean['han'], ... korean['si']);
    else if(showHours == 2) hourArray.push(...korean['saebyeok'],...korean['du'],... korean['si']);
    else if(showHours == 3) hourArray.push(...korean['saebyeok'],...korean['se'],... korean['si']);
    else if(showHours == 4) hourArray.push(...korean['saebyeok'],...korean['ne'],... korean['si']);
    else if(showHours == 5) hourArray.push(...korean['saebyeok'],...korean['daseot'], ... korean['si']);
    else if(showHours == 6) hourArray.push(...korean['saebyeok'],...korean['yeoseot'], ... korean['si']);
    else if(showHours == 7) hourArray.push(...korean['ojeon'],...korean['ilgeop'], ... korean['si']);
    else if(showHours == 8) hourArray.push(...korean['ojeon'],...korean['yeodeolp'],... korean['si']);
    else if(showHours == 9) hourArray.push(...korean['ojeon'],...korean['ahop'],... korean['si']);
    else if(showHours == 10) hourArray.push(...korean['ojeon'],...korean['yeol'], ... korean['si']);
    else if(showHours == 11) hourArray.push(...korean['ojeon'],...korean['yeol'],...korean['han'], ... korean['si']);
    else if(showHours == 12 && minutes < 5) hourArray.push(...korean['jeongo']);
    else if(showHours == 12) hourArray.push(...korean['ohu'],...korean['yeol'],...korean['du'], ... korean['si']);
    else if(showHours == 13) hourArray.push(...korean['ohu'],...korean['han'], ... korean['si']);
    else if(showHours == 14) hourArray.push(...korean['ohu'],...korean['du'],... korean['si']);
    else if(showHours == 15) hourArray.push(...korean['ohu'],...korean['se'],... korean['si']);
    else if(showHours == 16) hourArray.push(...korean['ohu'],...korean['ne'],... korean['si']);
    else if(showHours == 17) hourArray.push(...korean['ohu'],...korean['daseot'], ... korean['si']);
    else if(showHours == 18) hourArray.push(...korean['ohu'],...korean['yeoseot'], ... korean['si']);
    else if(showHours == 19) hourArray.push(...korean['jeonyeok'],...korean['ilgeop'], ... korean['si']);
    else if(showHours == 20) hourArray.push(...korean['jeonyeok'],...korean['yeodeolp'],... korean['si']);
    else if(showHours == 21) hourArray.push(...korean['bam'],...korean['ahop'],... korean['si']);
    else if(showHours == 22) hourArray.push(...korean['bam'],...korean['yeol'], ... korean['si']);
    else if(showHours == 23) hourArray.push(...korean['bam'],...korean['yeol'],...korean['han'], ... korean['si']);


    if (minutes < 1) hourArray.push(...korean['jeonggak'], ...korean['ieyo']);
    else if (minutes < 5 && showHours != 0 ) hourArray.push(...korean['yeyo']);
    else if (minutes < 5 && showHours == 0) hourArray.push(...korean['ieyo']);
    else if (minutes >= 5 && minutes < 10) hourArray.push(...korean['o5'], ...korean['bun'], ...korean['ieyo']);
    else if (minutes >= 10 && minutes < 15) hourArray.push(...korean['sib'], ...korean['bun'], ...korean['ieyo']);
    else if (minutes >= 15 && minutes < 20) hourArray.push(...korean['sib'], ...korean['o5'], ...korean['bun'], ...korean['ieyo']);
    else if (minutes >= 20 && minutes < 25) hourArray.push(...korean['i'],...korean['sib'], ...korean['bun'], ...korean['ieyo']);
    else if (minutes >= 25 && minutes < 30) hourArray.push(...korean['i'],...korean['sib'], ...korean['o5'], ...korean['bun'], ...korean['ieyo']);

    else if (minutes >= 30 && minutes < 35) hourArray.push(...korean['ban'],...korean['ieyo']);

    else if (minutes >= 35 && minutes < 40) hourArray.push(...korean['sam'],...korean['sib'], ...korean['o5'], ...korean['bun'], ...korean['ieyo']);
    else if (minutes >= 40 && minutes < 45) hourArray.push(...korean['sa'],...korean['sib'], ...korean['bun'], ...korean['ieyo']);
    else if (minutes >= 45 && minutes < 50) hourArray.push(...korean['sa'],...korean['sib'], ...korean['o5'], ...korean['bun'], ...korean['ieyo']);
    else if (minutes >= 50 && minutes < 55) hourArray.push(...korean['o50'],...korean['sib'], ...korean['bun'], ...korean['ieyo']);
    else if (minutes >= 55 && minutes < 60) hourArray.push(...korean['o50'],...korean['sib'], ...korean['o5'], ...korean['bun'], ...korean['ieyo']);

    addToElements(hourArray);
}

function removeClass() {
    for (const key in korean) {
        if (korean[key] instanceof NodeList) {
            korean[key].forEach(element => {
                element.classList.remove('light');
            });
        }
    }
}

function addToElements(elements){
    elements.forEach(x => x.classList.add('light'));
}

setInterval(getKoreanClock, 1000);

export { korean, getKoreanClock };