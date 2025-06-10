import textConfig from "@/app/data/textConfig"
import { useEffect, useState } from "react"

interface ICardsHint {
    isStarted: boolean,
    isFinished: boolean
}

function CardsHint(props: ICardsHint) {
    const { isStarted, isFinished } = props
    const [hintText, setHintText] = useState('')
    const [hintClassMod, setHintClassMod] = useState('')

    useEffect(() => {
        if(!isStarted) {
            setHintText(textConfig.CARDS_HINT_IDLE_LABLE)
            setHintClassMod('cards__hint_idle')
        } else if(isStarted && isFinished) {
            setHintText(textConfig.CARDS_HINT_FIN_LABLE)
            setHintClassMod('cards__hint_fin')
        } else {
            setHintText('')
            setHintClassMod('')
        }
    }, [isStarted, isFinished])

  return (
    <span className={`cards__hint ${ hintClassMod }`}>
      { hintText }
    </span>
  )
}

export default CardsHint