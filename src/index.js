import './css/style.css';
import orderByProps from './js/app';
import showOptionsAttacks from './js/destructuring';

// for the first task about keys of Object

const objUser = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
orderByProps(objUser);

// for the second task about destructuring

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};
showOptionsAttacks(character);
