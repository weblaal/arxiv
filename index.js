let sek = prompt('введите количество секунд');
console.log(sek);
let sutki = 86400;
let chas = 3600;
let min = 60;

let sut = (sek % sutki); // остаток от суток
let sutpr = Math.floor((sek - sutki) / sut); // на экран
console.log(sutpr);

let ch = (sut % chas); //остаток от часов
let chpr = ((sut - ch) / chas); // на экран
console.log(chpr);

let mi = (ch % min); // остаток от минут
let mipr = ((ch - mi) / min); // на экран
console.log(mipr);

let se = mi; //секунды
console.log(mi);

let final = ('Шли ' + (sutpr + 1) + ' сутки. Часы показывают ' + chpr + 'ч. / ' + mipr + 'мин. / ' + se + 'сек.');
alert(final);