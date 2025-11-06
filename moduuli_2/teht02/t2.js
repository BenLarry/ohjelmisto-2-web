'use strict';

const ol = document.querySelector('#target');
const participants = +prompt("Enter number of participant");

const names = [];
for(let i = 0; i < participants; i++) {
    names.push(prompt("Enter parcipant name"));
};

names.sort();
for(let i = 0; i < names.length; i++) {
    const li = document.createElement('li');
    li.innerText = names[i];
    ol.appendChild(li)
};