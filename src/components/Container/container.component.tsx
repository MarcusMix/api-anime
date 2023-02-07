//styles
import { ContainerStyled } from "./container.styles"

//types
import ContainerProps from "./container.types"

const Container = ({children}: ContainerProps) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export default Container