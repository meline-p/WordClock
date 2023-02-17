var letter = document.querySelectorAll("tr");
var light = document.querySelector(".light");
var dark = document.querySelector(".dark");

var une = document.querySelectorAll(".une");
var deux = document.querySelectorAll(".deux");
var trois = document.querySelectorAll(".trois");
var quatre = document.querySelectorAll(".quatre");
var cinq = document.querySelectorAll(".cinq");
var six = document.querySelectorAll(".six");
var sept = document.querySelectorAll(".sept");
var huit = document.querySelectorAll(".huit");
var neuf = document.querySelectorAll(".neuf");
var dix = document.querySelectorAll(".dix");
var onze = document.querySelectorAll(".onze");

var midi = document.querySelectorAll(".midi");
var minuit = document.querySelectorAll(".minuit");

var heure = document.querySelectorAll(".heure");
var heures = document.querySelectorAll(".heures");

var moins = document.querySelectorAll(".moins");
var le = document.querySelectorAll(".le");
var et = document.querySelectorAll(".et");
var vingt = document.querySelectorAll(".vingt");
var cinqM = document.querySelectorAll(".cinq-m");
var vingtCinq = document.querySelectorAll(".vingt-cinq");
var dixM = document.querySelectorAll(".dix-m");
var quart = document.querySelectorAll(".quart");
var demie = document.querySelectorAll(".demie");

function getHoursAndMinutes(){
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();

    showHours();

    function showHours(){
        if (hours == 0){
            if (minutes < 5){
                minuit.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                minuit.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                minuit.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                minuit.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                minuit.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                minuit.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                minuit.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
    
        }else if (hours == 1 || hours == 13){
            if (minutes < 5){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 2 || hours == 14){
            if (minutes < 5){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                deux.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 3 || hours == 15){
            if (minutes < 5){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                trois.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 4 || hours == 16){
            if (minutes < 5){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                quatre.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 5 || hours == 17){
            if (minutes < 5){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                cinq.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 6 || hours == 18){
            if (minutes < 5){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                six.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 7 || hours == 19){
            if (minutes < 5){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                sept.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 8 || hours == 20){
            if (minutes < 5){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                huit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 9 || hours == 21){
            if (minutes < 5){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                neuf.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 10 || hours == 22){
            if (minutes < 5){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                dix.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 11){
            if (minutes < 5){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                midi.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                midi.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                midi.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                midi.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                midi.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 12){
            if (minutes < 5){
                midi.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                midi.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                midi.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                midi.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                midi.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                midi.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                midi.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                une.forEach(x => x.classList.add('light'));
                heure.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }else if (hours == 23){
            if (minutes < 5){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 5 && minutes < 10){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 10 && minutes < 15){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 15 && minutes < 20){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 20 && minutes < 25){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 25 && minutes < 30){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 30 && minutes < 35){
                onze.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                et.forEach(x => x.classList.add('light'));
                demie.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 35 && minutes < 40){
                minuit.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingtCinq.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 40 && minutes < 45){
                minuit.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                vingt.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 45 && minutes < 50){
                minuit.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                le.forEach(x => x.classList.add('light'));
                quart.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 50 && minutes < 55){
                minuit.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                dixM.forEach(x => x.classList.add('light'));
            }
            if (minutes >= 55 && minutes < 60){
                minuit.forEach(x => x.classList.add('light'));
                heures.forEach(x => x.classList.add('light'));
                moins.forEach(x => x.classList.add('light'));
                cinqM.forEach(x => x.classList.add('light'));
            }
        }
    }
}

getHoursAndMinutes();

setTimeout(function (){
    window.location.reload();
}, 1000);

