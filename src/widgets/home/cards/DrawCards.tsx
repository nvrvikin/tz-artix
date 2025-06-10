import Card from "./Card"
import type { IDrawCards } from "./types"

function DrawCards(props: IDrawCards) {
    const { cardsData } = props
    if(cardsData.length) {
        return (
            <>
                {
                    cardsData.filter(card => card.isDrawn).map(card =>
                        <Card key={ card.id }
                            bgColor={ card.bgColor }
                            countdown={ card.countdown } />)
                }
            </>
        )
    }
    return <></>
}

export default DrawCards