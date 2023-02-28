//styles
import { ButtonStyled } from "./button.styles"

//react
import { FC } from 'react'

//interface
import IButton from "../../interface/button.interface"

const Button:FC<IButton> = ({ name, onClick, children }) => {
    return (
        <ButtonStyled name={name} onClick={onClick}>
            {children}
        </ButtonStyled>
    )
}

export default Button