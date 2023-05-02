import { forwardRef } from 'react'
// import { ErrorIcon } from './assets/icons/error-icon'
// import { SuccessIcon } from './assets/icons/success-icon'
import { ICardProps } from './types'
import styles from './card.module.css'
import {
  CardHeader,
  ICardHeaderProps,
  CardContent,
  ICardContentProps,
  CardFooter,
  ICardFooterProps,
  CardMedia,
  ICardMediaProps,
} from './all-files'
// import cls from 'classnames'

// const Card = forwardRef<HTMLInputElement, CardProps>(
//   ({ id, title, subtitle, image, ...rest }) => {
//     return (
//       <div className={styles.cardWrapper}>
//         <div className={styles.entryImage}>
//           <img src={`/assets/${image}`} alt="entryImage" />
//         </div>
//         <div className={styles.cardInfoContainer}>
//           <div className={styles.cardTextWrapper}>
//             <label className={styles.cardTitle}>
//               {title}
//             </label>
//             <label className={styles.cardSubtitle}>
//               {subtitle}
//             </label>
//           </div>
//           <button className={styles.cardButton}>
//               Go to Entry
//           </button>
//         </div>
//       </div>
//     )
//   }
// )

// export { Card }

import React from 'react'

interface ICardComposition {
  // COMPONENTS
  Content: React.FC<ICardContentProps>
  Footer: React.FC<ICardFooterProps>
  Header: React.FC<ICardHeaderProps>
  Media: React.FC<ICardMediaProps>
}

export const CardContext = React.createContext<ICardProps | undefined>(
  undefined
)

const Card: React.FC<ICardProps> & ICardComposition = ({
  children,
  hasMedia,
}) => {
  return (
    <CardContext.Provider value={{ children, hasMedia }}>
      <div className={styles['card-container']}>{children}</div>
    </CardContext.Provider>
  )
}

Card.Content = CardContent
Card.Footer = CardFooter
Card.Header = CardHeader
Card.Media = CardMedia

export { Card }
