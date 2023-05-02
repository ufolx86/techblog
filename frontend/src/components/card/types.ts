import { ReactElement, ReactNode } from 'react'

// export type CardProps = {
//     id?: string
//     title: string
//     subtitle?: string
//     image?: string
//     type?: 'blog1'
//     leftIcon?: ReactElement<any>
//     rightIcon?: ReactElement<any>
// }

export interface ICardProps {
    children: ReactNode | ReactNode[]
    hasMedia?: boolean
}
