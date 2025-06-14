import { useState } from "react"
import BaseLayout from "@/app/layouts/BaseLayout"
import { IntervalInput, CountInput } from "@/widgets/home"
import { Cards } from "@/widgets/home/cards"
import textConfig from "@/app/data/textConfig"

function Home() {
    const [isStarted, setIsStarted] = useState(false)
    const [count, setCount] = useState(0)
    const [interval, setInterval] = useState(0)
    const [progress, setProgress] = useState(0)

    const handleStartClick = () => {
        setIsStarted(!isStarted)
    }

    return (
        <BaseLayout>
            <section className="home">
                <div className="home__inputs-wrapper">
                    <span className="home__settings-label">Настройки</span>
                    <IntervalInput isStarted={ isStarted } setInterval={ setInterval } />
                    <CountInput isStarted={ isStarted } setCount={ setCount } />
                    <button className="home__button" onClick={ handleStartClick }>{ !isStarted ? textConfig.BUTTON_START_LABEL : textConfig.BUTTON_STOP_LABEL }</button>
                    <div className={ `home__progress ${ isStarted && count ? 'home__progress_shown' : ''}` }>
                        <meter min={ 0 } max={ count } value={ progress } ></meter>
                    </div>
                </div>
                <Cards isStarted={ isStarted } count={ count } setProgress={ setProgress } interval={ interval } />
            </section>
        </BaseLayout>
  )
}


export default Home