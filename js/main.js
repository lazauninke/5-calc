/*
Ka reikia zinoti:
- koki noriu sugeneruoti turini? is kokiu duomenu?
- kur ta turini ikisti? koks yra selector'ius?
Kai norim perrasyti elemento tekstini turini:
element.innerText = 'turinys';
Prideti/pasalinti klases:
element.classList.add('red');
element.classList.remove('blue');
*/

// susirandame vieta
const selector = '.calc';
const DOM = document.querySelector(selector);
const formulaDOM = DOM.querySelector('.formula');

// sukuriame turini
const symbols = ['C', '+/-', '%', '/', '1', '2', '3', '*', '4', '5', '6', '-', '7', '8', '9', '+', '0', '.', '<', '='];
let HTML = '';

for (let i = 0; i < symbols.length; i++) {
    HTML += `<div class="key" data-symbol="${symbols[i]}"></div>`;
}

// istatome turini i vieta
DOM.insertAdjacentHTML('beforeend', HTML);

// susirandame katik sukurtus mygtukus
const buttons = DOM.querySelectorAll('.key');

// uzregistruota paspaudima ant kiekvieno mygtuko
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];

    btn.addEventListener('click', function () {
        const symbol = btn.dataset.symbol;
        formulaDOM.innerText += symbol;
    });
}



