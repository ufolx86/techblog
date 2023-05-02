import { useContext } from 'react';
import { CardContext } from '../index';
import { ICardProps } from '../types';

/**
 * This context hook allow our child components to easily reach
 * into the Card context and get the pieces it needs.
 * 
 * Note: It even makes sure the components is used within a Card
 * component
 * 
 * @returns context
 */

export const useCard = (): ICardProps => {
    const context = useContext(CardContext)

    if (!context) {
        throw new Error('This component must be used within a <Card> component.')
    }
    return context
}