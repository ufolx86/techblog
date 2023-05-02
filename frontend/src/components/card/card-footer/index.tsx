import React, {ReactNode} from 'react'
import styles from './card-footer.module.css'

export interface ICardFooterProps {
    children?: ReactNode | ReactNode[]
}

export const CardFooter: React.FC<ICardFooterProps> = ({children}) => {
        return (
            <div className={styles['card-footer-container']}>{children}</div>
        );
}