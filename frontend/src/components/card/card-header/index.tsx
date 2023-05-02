import React, {ReactNode} from 'react'
import styles from './card-header.module.css'

export interface ICardHeaderProps {
    title?:string
    children?: ReactNode | ReactNode[]

}

export const CardHeader: React.FC<ICardHeaderProps> = ({title, children}) => {
        return (
            <div className={styles['card-header-container']}>
                {title && <h5>{title}</h5>}
                {children}
            </div>
        )
}