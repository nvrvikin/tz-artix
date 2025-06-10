import valuesConfig from "@/app/data/valuesConfig"

function defineRandomCountdown() {
    const min = valuesConfig.MIN_COUNTDOWN_RANDOM
    const max = valuesConfig.MAX_COUNTDOWN_RANDOM

    //+ 1 т.к. Math.random выдаёт [0, 1)
    return Math.floor((Math.random() * (max - min + 1)) + min)
}

export default defineRandomCountdown