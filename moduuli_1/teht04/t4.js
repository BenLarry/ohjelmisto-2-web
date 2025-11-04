'use strict';

const namee = prompt('Anna nimesi:');
const num = Math.floor(Math.random() * 4);

let faction = null;
switch (num) {
    case 0:
        faction = 'Gryffindor';
        break;

    case 1:
        faction = 'Slytherin';
        break;

    case 2:
        faction = 'Hufflepuff';
        break;

    case 3:
        faction = 'Ravenclaw';
        break;

    default:
        faction = 'Factionless';
        break;
};

document.querySelector('#target').innerText = `${namee}, you are ${faction}`;