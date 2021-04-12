
const calc = document.querySelector('.calc');
const screen = calc.querySelector('.screen');

screen.innerText = 'Labas';

// fail, nes dingsta zinotas elementas
// calc.innerHTML += '<div class="key" data-symbol="C"></div>';

// good, nes esantys elementai nera is naujo sukuriami
calc.insertAdjacentHTML('beforeend', '<div class="key" data-symbol="C"></div>');

screen.innerText = 'Iki';