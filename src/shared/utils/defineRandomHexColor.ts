const hexValues = '0123456789abcdef'.split('')

function defineRandomHexColor(): string {
    let newColor = ''

    for(let i = 0; i < 6; i++) {
        newColor += hexValues[Math.floor(Math.random() * hexValues.length)]
    }

    return '#' + newColor
}

export default defineRandomHexColor