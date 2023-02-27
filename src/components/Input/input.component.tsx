//hooks
import { useState } from "react"

import { useDebounce } from "../../utils/useDebounce"

//styles
import { InputStyled } from "./input.styles"

//type
import InputProps from "../../interface/input.types"

const Input = ({ value, onChange, placeholder}: InputProps) => {

    const [displayValue, setDisplayValue] = useState<string>(value)
    const debouncedChange = useDebounce(onChange, 0)

    const handleChangeInput = (e: string | any) => {
        setDisplayValue(e.target.value)
        debouncedChange(e.target.value)
    }

    return (
        <InputStyled 
            placeholder={placeholder}
            type="search" 
            value={value} 
            onChange={handleChangeInput} 
        />
    )
}

export default Input