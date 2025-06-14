export interface ICards {
    isStarted: boolean
    interval: number
    count: number
    setProgress: (value: number) => void
}

export interface ICardData {
    id: string
    bgColor: string
    countdown: number
    isDrawn: boolean
    updateCountdown: () => void
}

export interface ICard {
    bgColor: string
    countdown: number
    updateCountdown: () => void
}

export interface IDrawCards {
    cardsData: ICardData[]
}
