import {
  ChangeEventHandler,
  ReactElement,
  Ref,
  ReactNode,
  CSSProperties,
  InputHTMLAttributes,
  TextareaHTMLAttributes
} from 'react'

export type TextInputProps = {
  disabled?: boolean
  error?: boolean
  name: string
  className?: string
  inputClassName?: string
  successText?: string | string[] | ReactNode | ReactNode[]
  errorText?: string | string[] | ReactNode | ReactNode[]
  helperText?: string | string[] | ReactNode | ReactNode[]
  id?: string
  label?: string
  placeholder: string
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url'
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  leftIcon?: ReactElement<any>
  rightIcon?: ReactElement<any>
  required?: boolean
  defaultValue?: string | number | readonly string[] | undefined
  inputRef?: Ref<any>
  labelStyle?: CSSProperties
  style?: CSSProperties
} & InputHTMLAttributes<any> & TextareaHTMLAttributes<any>

export type FormMessageProps = {
  messageId: string
  helperText?: string | string[] | ReactNode | ReactNode[]
  successText?: string | string[] | ReactNode | ReactNode[]
  errorText?: string | string[] | ReactNode | ReactNode[]
}
