import textConfig from "@/app/data/textConfig"
import valuesConfig from "@/app/data/valuesConfig"
import clamp from "@/shared/utils/clamp"
import { useState, type ChangeEvent } from "react"

interface IIntervalInput {
    isStarted: boolean,
    setInterval: (newValue: number) => void
}

function IntervalInput(props: IIntervalInput) {
    const { isStarted, setInterval } = props
    const [value, setValue] = useState(0)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { valueAsNumber } = e.currentTarget
        const clampedValue = clamp(valueAsNumber, valuesConfig.MIN_INTERVAL, valuesConfig.MAX_INTERVAL)
        setValue(clampedValue)

        //TODO: debounce
        setInterval(clampedValue)
    }
    
    return (
        <div className="home-input home-input_interval">
            <label htmlFor='interval' className="home-input__label">
                { textConfig.INTERVAL_LABEL }
            </label>
            <input id='interval'
                className="home-input__input"
                min={ valuesConfig.MIN_INTERVAL }
                max={ valuesConfig.MAX_INTERVAL }
                type="range"
                value={ value }
                onChange={ handleChange }
                disabled={ isStarted } />
            <span className="home-input__value">{ value }</span>
        </div>
    )
}

export default IntervalInput
