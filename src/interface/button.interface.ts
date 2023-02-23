import { ReactNode } from 'react'

interface IButton {
    name?: string
    onClick?: () => void | undefined
    children: ReactNode
}

export default IButton