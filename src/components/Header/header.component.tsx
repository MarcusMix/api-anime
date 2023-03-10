//react
import { FC } from "react"

//styles
import { HeaderStyled } from "./header.styles"

//types
import HeaderProps from "../../interface/header.types"

const Header:FC<HeaderProps> = ({ children }) => {
    return (
        <HeaderStyled>
            {children}
        </HeaderStyled>
    )
}

export default Header