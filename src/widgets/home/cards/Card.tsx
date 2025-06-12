import type { ICard } from "./types"

function Card(props: ICard) {
    const { bgColor, countdown, updateCountdown } = props

    return (
        <div className="card" onClick={ updateCountdown } style={{ backgroundColor: bgColor ? bgColor : '#000000' }}>
            <span className="card__color">{ bgColor }</span>
            <span className="card__countdown">{ countdown }</span>
        </div>
    )
}

export default Card