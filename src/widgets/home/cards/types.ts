export interface ICards {
    isStarted: boolean
    interval: number
    count: number
}

export interface ICardData {
    id: string
    bgColor: string
    countdown: number
    isDrawn: boolean
}

export interface ICard {
    bgColor: string
    countdown: number
}

export interface IDrawCards {
    cardsData: ICardData[]
}
