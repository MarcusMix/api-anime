//react
import { FC, ReactNode } from "react"

//styles
import { CardContainer } from "./card.styles"

//interface
import CardProps from "./card.types"


const Card:FC<CardProps> = ({ children, layout, animate, initial, exit}) => {
    return (
        <CardContainer 
            layout={layout} 
            animate={animate} 
            initial={initial} 
            exit={exit}
        >
            {children}
        </CardContainer>
    )
}

export default Card