import { useEffect, useRef, useState } from "react";
import type { ICards, ICardData } from "./types";
import { defineRandomCountdown, defineRandomHexColor } from "@/shared/utils";
import DrawCards from "./DrawCards";
import CardsHint from "./CardsHint";

function Cards(props: ICards) {
    const { isStarted, count, interval } = props

    // STATES
    const [cardsData, setCardsData] = useState<ICardData[]>([])
    const [currentInterval, setCurrentInterval] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    
    // REFS
    const cardsDataRef = useRef(cardsData)
    const currentIntervalRef = useRef(currentInterval)
    const isStartedRef = useRef(isStarted)
    //const isFinishedRef = useRef(isFinished)

    const updateCardCountdown = (id: string) => {
        const localCardsData = cardsDataRef.current
        let newCardsData = localCardsData.map(cd => {
            if(cd.id !== id) return cd;
            return {
                ...cd,
                countdown: defineRandomCountdown()
            }
        })
        setCardsData(newCardsData)
    }

    const newItem = (newId: number): ICardData => {

        return {
            id: `${ newId }`,
            bgColor: defineRandomHexColor(),
            countdown: defineRandomCountdown(),
            isDrawn: false,
            updateCountdown: () => updateCardCountdown(`${ newId }`)
        }
    }

    useEffect(() => {
        setCurrentInterval(interval)
    }, [interval])

    useEffect(() => {
        if(!isStarted) {
            setCardsData([])
            if(isFinished) setIsFinished(false)
        } else {
            if(isFinished) return;

            const tickItems = () => {
                const localCardsData = [...cardsDataRef.current]
                let localCurrentInterval = currentIntervalRef.current

                let checkNewDrawn = false

                let newCardsData = localCardsData.map(card => {
                    let isDrawn = card.isDrawn
                    let countdown = card.countdown
                    
                    if(isDrawn) countdown--

                    if(!checkNewDrawn && !isDrawn && localCurrentInterval <= 1) {
                        isDrawn = true

                        // Если interval не равен 0, прорисовывает по одной карточке
                        if(interval > 0) {
                            checkNewDrawn = true
                        }
                    }

                    return {
                        ...card,
                        countdown,
                        isDrawn
                    }
                })
                .filter(card => card.countdown > 0)

                // Компенсация секунды на момент проверки
                if(localCurrentInterval > 1) {
                    localCurrentInterval--
                } else {
                    localCurrentInterval = interval
                }

                if(!newCardsData.length) setIsFinished(true)

                setCardsData(newCardsData)
                setCurrentInterval(localCurrentInterval)
            }

            let filledCardsData = []
            for(let i = 0; i < count; i++) {
                filledCardsData.push(newItem(i))
            }

            setCardsData(filledCardsData)

            const timerId = setInterval(tickItems, 1000)
            return () => clearInterval(timerId)
        }
    }, [isStarted, isFinished])

    useEffect(() => {
        cardsDataRef.current = cardsData;
        currentIntervalRef.current = currentInterval;
        isStartedRef.current = isStarted;
    }, [cardsData, currentInterval, isStarted]);

    return (
        <div className="cards">
            <CardsHint isStarted={ isStarted } isFinished= { isFinished } />
            <div className="cards-wrapper">
                <DrawCards cardsData={ cardsData } />
            </div>
        </div>
    )
}

export default Cards