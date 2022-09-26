// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

//Stocker l'heure , minute , seconde  dans des varaiables

d = new Date();
hr = d.getHours();
min = d.getMinutes();
sec = d.getSeconds();

var sec_rotation = 6 * sec;
var min_rotation = 6 * min;
var hr_rotation = 30 * hr + min / 2;

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// Déplacer les aiguilles
function demarrerLaMontre() {
  hr_rotation += 30 / (3600 + min * 60 + sec);
  min_rotation += 6 / (60 + sec);
  sec_rotation += 6;
  AIGUILLEHR.style.transform = `rotate(${hr_rotation}deg)`;
  AIGUILLEMIN.style.transform = `rotate(${min_rotation}deg)`;
  AIGUILLESEC.style.transform = `rotate(${sec_rotation}deg)`;
}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
