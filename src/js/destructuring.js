export default function getSpecialAttacks(character) {

    return character.special.map((attack) =>
        attack.description ? { ...attack } : { ...attack, description: 'Описание недоступно' }
    )
}