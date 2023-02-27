import { ReactNode } from "react"

interface CardProps {
    children: ReactNode
    layout?: boolean
    animate?: any
    initial?: any
    exit?: any
    onClick?: (e: any) => void
}

export default CardProps