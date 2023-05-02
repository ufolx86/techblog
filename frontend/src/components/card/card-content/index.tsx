import React, {ReactNode} from 'react'
import { useCard } from '../hooks/useCard'
import styles from './card-content.module.css'

export interface ICardContentProps {
    children?: ReactNode | ReactNode[]
}

export const CardContent: React.FC<ICardContentProps> = ({children}) => {
    const { hasMedia } = useCard()
    const cardContentStyle = {
        padding: hasMedia ? '1.5rem' : '',
    }

    return (
    <div className={styles['card-content-container']} style={cardContentStyle}>
        {children}
    </div>
    )
}