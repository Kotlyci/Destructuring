import getSpecialAttacks from '../destructuring';
import character from '../data'

test('тест функции getSpecialAttacks', () => {
    const res = [
        {
            id: 8,
            name: "Двойной выстрел",
            icon: "http://...",
            description: "Двойной выстрел наносит двойной урон"
        },
        {
            id: 9,
            name: "Нокаутирующий удар",
            icon: "http://...",
            description: "Описание недоступно"
        }
    ]

    expect(getSpecialAttacks(character)).toEqual(res);
})