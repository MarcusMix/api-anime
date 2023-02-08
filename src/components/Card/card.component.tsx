//react
import { FC, ReactNode } from "react"

//styles
import { CardContainer } from "./card.styles"

//interface
import CardProps from "./card.types"


const Card:FC<CardProps> = ({ children, layout, animate, initial, exit, onClick}) => {
    return (
        <CardContainer 
            layout={layout} 
            animate={animate} 
            initial={initial} 
            exit={exit}
            onClick={onClick}
        >
            {children}
        </CardContainer>
    )
}

export default Card