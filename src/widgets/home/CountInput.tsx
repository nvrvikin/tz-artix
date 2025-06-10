import textConfig from "@/app/data/textConfig"
import valuesConfig from "@/app/data/valuesConfig"
import clamp from "@/shared/utils/clamp"
import { useState, type ChangeEvent } from "react"

interface ICountInput {
    isStarted: boolean,
    setCount: (newCount: number) => void
}

function CountInput(props: ICountInput) {
    const { isStarted, setCount } = props
    const [value, setValue] = useState(0)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { valueAsNumber } = e.currentTarget
        const clampedValue = clamp(valueAsNumber, valuesConfig.MIN_COUNT, valuesConfig.MAX_COUNT)
        setValue(clampedValue)

        //TODO: debounce
        setCount(clampedValue)
    }

    return (
        <div className="home-input home-input_count">
            <label htmlFor='count' className="home-input__label">
                { textConfig.COUNT_LABEL }
            </label>
            <input id='count'
                className="home-input__input"
                type="number"
                value={ value }
                onChange={ handleChange }
                min={ valuesConfig.MIN_COUNT }
                max={ valuesConfig.MAX_COUNT }
                disabled={ isStarted } />
        </div>
    )
}

export default CountInput
