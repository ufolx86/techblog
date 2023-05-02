import { forwardRef, useRef } from 'react'
import { ErrorIcon } from './assets/icons/error-icon'
import { SuccessIcon } from './assets/icons/success-icon'
import { TextInputProps, FormMessageProps } from './types'
import styles from './text-input.module.css'
import cls from 'classnames'

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      disabled,
      error,
      name,
      className,
      inputClassName,
      successText,
      errorText,
      helperText,
      id,
      label,
      placeholder,
      type,
      value,
      leftIcon,
      rightIcon,
      required,
      defaultValue,
      inputRef,
      labelStyle,
      style,
      ...rest
    },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement>()
    const textInputRef = ref || internalRef

    const FormMessage = ({
      messageId,
      helperText,
      errorText,
      successText,
    }: FormMessageProps) => {
      if (errorText || successText) {
        const text = errorText ? <p>{errorText}</p> : <p>{successText}</p>

        const isSuccessText = !errorText

        const processText = Array.isArray(text) ? (
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
            }}
          >
            {(text as any[]).map((message, index) => (
              <li key={`message${messageId}-${index}`}>{message}</li>
            ))}
          </ul>
        ) : (
          text
        )

        let errorIcon, successIcon

        if (errorText) {
          errorIcon = <ErrorIcon />
        }

        if (isSuccessText) {
          successIcon = <SuccessIcon />
        }

        return (
          <div>
            {errorIcon ?? successIcon}
            {processText}
          </div>
        )
      }

      if (helperText) {
        const processText = Array.isArray(helperText) ? (
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
            }}
          >
            {(helperText as any[]).map((message, index) => (
              <li key={`message${messageId}-${index}`}>{message}</li>
            ))}
          </ul>
        ) : (
          helperText
        )
        return processText
      }

      return
    }

    const msgId = `message_${id}`

    const classNameInput = cls(styles.textInput, inputClassName)

    return (
      <div>
        <label className = {styles.textInputLabel} style={labelStyle}>
          {label} {required && <span className = {styles.textInputRequired}>*</span>}
        </label>
        <div className={styles.textInputWrapper}>
          {leftIcon && <span>{leftIcon}</span>}
          <input
            id={id}
            required={required}
            className={classNameInput}
            value={value}
            disabled={disabled}
            type={type}
            ref={textInputRef}
            {...rest}
          />
          {rightIcon && <span>{rightIcon}</span>}
        </div>

        <FormMessage
          helperText={helperText}
          errorText={errorText}
          successText={successText}
          messageId={msgId}
        />
      </div>
    )
  }
)

export { TextInput }