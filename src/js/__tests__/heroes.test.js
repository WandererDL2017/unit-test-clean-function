/* eslint-disable */
import getHealth from '../app';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 45 }, 'wounded'],
  [{ name: 'Маг', health: 12 }, 'critical'],
])(
  ('Состояние здоровья персонажа'),
  (hero, expected) => {
    const result = getHealth(hero);

    expect(result).toBe(expected);
  },
);
