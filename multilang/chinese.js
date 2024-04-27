const chinese = {
    shangwu: document.querySelectorAll(".shangwu"),
    xiawu: document.querySelectorAll(".xiawu"),

    shiH: document.querySelectorAll(".shiH"),
    yi: document.querySelectorAll(".yi"),
    er: document.querySelectorAll(".er"),
    ling: document.querySelectorAll(".ling"),
    san: document.querySelectorAll(".san"),
    si4: document.querySelectorAll(".si4"),
    wuH: document.querySelectorAll(".wuH"),
    liu: document.querySelectorAll(".liu"),
    qi: document.querySelectorAll(".qi"),
    ba: document.querySelectorAll(".ba"),
    jiu: document.querySelectorAll(".jiu"),

    dian: document.querySelectorAll(".dian"),
    fen: document.querySelectorAll(".fen"),
    ban: document.querySelectorAll(".ban"),
    ke: document.querySelectorAll(".ke"),

    yiM: document.querySelectorAll(".yiM"),
    erM: document.querySelectorAll(".erM"),
    sanM: document.querySelectorAll(".sanM"),
    siM: document.querySelectorAll(".siM"),
    wuM50: document.querySelectorAll(".wuM50"),
    shiM: document.querySelectorAll(".shiM"),
    wuM5: document.querySelectorAll(".wuM5"),
  
}

function getChineseClock() {
    var hourArray = [];
    removeClass();

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var showHours = hours % 24; 

    if(showHours == undefined) return false;

    if(showHours == 0) hourArray.push(...chinese['shangwu'], ...chinese['shiH'], ...chinese['er'],... chinese['dian']);
    else if(showHours == 1) hourArray.push(...chinese['shangwu'],...chinese['yi'], ... chinese['dian']);
    else if(showHours == 2) hourArray.push(...chinese['shangwu'],...chinese['er'],... chinese['dian']);
    else if(showHours == 3) hourArray.push(...chinese['shangwu'],...chinese['san'],... chinese['dian']);
    else if(showHours == 4) hourArray.push(...chinese['shangwu'],...chinese['si4'],... chinese['dian']);
    else if(showHours == 5) hourArray.push(...chinese['shangwu'],...chinese['wuH'], ... chinese['dian']);
    else if(showHours == 6) hourArray.push(...chinese['shangwu'],...chinese['liu'], ... chinese['dian']);
    else if(showHours == 7) hourArray.push(...chinese['shangwu'],...chinese['qi'], ... chinese['dian']);
    else if(showHours == 8) hourArray.push(...chinese['shangwu'],...chinese['ba'],... chinese['dian']);
    else if(showHours == 9) hourArray.push(...chinese['shangwu'],...chinese['jiu'],... chinese['dian']);
    else if(showHours == 10) hourArray.push(...chinese['shangwu'],...chinese['shiH'], ... chinese['dian']);
    else if(showHours == 11) hourArray.push(...chinese['shangwu'],...chinese['shiH'],...chinese['yi'], ... chinese['dian']);
    else if(showHours == 12) hourArray.push(...chinese['xiawu'],...chinese['shiH'], ...chinese['er'], ... chinese['dian']);
    else if(showHours == 13) hourArray.push(...chinese['xiawu'],...chinese['yi'], ... chinese['dian']);
    else if(showHours == 14) hourArray.push(...chinese['xiawu'],...chinese['er'],... chinese['dian']);
    else if(showHours == 15) hourArray.push(...chinese['xiawu'],...chinese['san'],... chinese['dian']);
    else if(showHours == 16) hourArray.push(...chinese['xiawu'],...chinese['si4'],... chinese['dian']);
    else if(showHours == 17) hourArray.push(...chinese['xiawu'],...chinese['wuH'], ... chinese['dian']);
    else if(showHours == 18) hourArray.push(...chinese['xiawu'],...chinese['liu'], ... chinese['dian']);
    else if(showHours == 19) hourArray.push(...chinese['xiawu'],...chinese['qi'], ... chinese['dian']);
    else if(showHours == 20) hourArray.push(...chinese['xiawu'],...chinese['ba'],... chinese['dian']);
    else if(showHours == 21) hourArray.push(...chinese['xiawu'],...chinese['jiu'],... chinese['dian']);
    else if(showHours == 22) hourArray.push(...chinese['xiawu'],...chinese['shiH'], ... chinese['dian']);
    else if(showHours == 23) hourArray.push(...chinese['xiawu'],...chinese['shiH'],...chinese['yi'], ... chinese['dian']);


    if (minutes >= 5 && minutes < 10) hourArray.push(...chinese['ling'], ...chinese['wuM5'], ...chinese['fen']);
    else if (minutes >= 10 && minutes < 15) hourArray.push(...chinese['shiM'],...chinese['fen']);
    else if (minutes >= 15 && minutes < 20) hourArray.push(...chinese['shiM'],...chinese['wuM5'], ...chinese['fen']);
    else if (minutes >= 20 && minutes < 25) hourArray.push(...chinese['erM'],...chinese['shiM'],...chinese['fen']);
    else if (minutes >= 25 && minutes < 30) hourArray.push(...chinese['erM'],...chinese['shiM'],...chinese['wuM5'], ...chinese['fen']);

    else if (minutes >= 30 && minutes < 35) hourArray.push(...chinese['ban']);

    else if (minutes >= 35 && minutes < 40) hourArray.push(...chinese['sanM'],...chinese['shiM'],...chinese['wuM5'],...chinese['fen']);
    else if (minutes >= 40 && minutes < 45) hourArray.push(...chinese['siM'],...chinese['shiM'],...chinese['fen']);
    else if (minutes >= 45 && minutes < 50) hourArray.push(...chinese['siM'],...chinese['shiM'],...chinese['wuM5'],...chinese['fen']);
    else if (minutes >= 50 && minutes < 55) hourArray.push(...chinese['wuM50'],...chinese['shiM'],...chinese['fen']);
    else if (minutes >= 55 && minutes < 60) hourArray.push(...chinese['wuM50'],...chinese['shiM'],...chinese['wuM5'],...chinese['fen']);

    addToElements(hourArray);
}

function removeClass() {
    for (const key in chinese) {
        if (chinese[key] instanceof NodeList) {
            chinese[key].forEach(element => {
                element.classList.remove('light');
            });
        }
    }
}

function addToElements(elements){
    elements.forEach(x => x.classList.add('light'));
}

setInterval(getChineseClock, 1000);

export { chinese, getChineseClock };