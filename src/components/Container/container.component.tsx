//styles
import { ContainerStyled } from "./container.styles"

//types
import ContainerProps from "../../interface/container.types"

const Container = ({ children }: ContainerProps) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export default Container