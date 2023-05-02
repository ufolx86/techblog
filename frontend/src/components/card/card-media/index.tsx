import React from 'react'
import styles from './card-media.module.css'

export interface ICardMediaProps {
    source?: string | undefined
    alt?: string | undefined
}

export const CardMedia: React.FC<ICardMediaProps> = ({source, alt}) => {
        return (
            <div className={styles['card-media-container']}>
                <img src={source} alt={alt}></img>
            </div>
        );
}