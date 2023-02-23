import { ButtonStyled } from "./button.styles"

import {FC} from 'react'
import IButton from "../../interface/button.interface"

const Button:FC<IButton> = ({ name, onClick, children }) => {
    return (
        <ButtonStyled name={name} onClick={onClick}>
            {children}
        </ButtonStyled>
    )
}

export default Button