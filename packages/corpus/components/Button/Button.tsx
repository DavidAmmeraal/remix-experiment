import { VariantProps, cva } from 'class-variance-authority'
import styles from './Button.module.css'
import { PropsWithChildren } from 'react'

const buttonClasses = cva([styles.Button], {
  variants: {
    size: {
      small: styles.sizeSmall,
      medium: styles.sizeMedium,
      large: styles.sizeLarge,
    },
    intent: {
      primary: styles.intentPrimary,
      standard: styles.intentStandard,
      outline: styles.intentOutline,
      plain: styles.intentPlain,
    },
    isLoading: {
      true: styles.isLoading,
    },
    onlyIcon: {
      true: '',
    },
    startIcon: {
      true: '',
    },
    endIcon: {
      true: '',
    },
    simple: {
      true: '',
    },
  },
  compoundVariants: [
    {
      size: 'large',
      startIcon: true,
      className: styles.startIconSizeLarge,
    },
    {
      size: 'medium',
      startIcon: true,
      className: styles.startIconSizeMedium,
    },
    {
      size: 'small',
      startIcon: true,
      className: styles.startIconSizeSmall,
    },
    {
      size: 'large',
      onlyIcon: true,
      className: styles.onlyIconLarge,
    },
    {
      size: 'medium',
      onlyIcon: true,
      className: styles.onlyIconMedium,
    },
    {
      size: 'small',
      onlyIcon: true,
      className: styles.onlyIconSmall,
    },
    {
      size: 'large',
      endIcon: true,
      className: styles.endIconSizeLarge,
    },
    {
      size: 'medium',
      endIcon: true,
      className: styles.endIconSizeMedium,
    },
    {
      size: 'small',
      endIcon: true,
      className: styles.endIconSizeSmall,
    },
    {
      intent: 'plain',
      simple: true,
      className: styles.simpleIntentSize,
    },
  ],
})

type ButtonVariantProps = VariantProps<typeof buttonClasses>

export interface ButtonProps extends PropsWithChildren {
  size?: ButtonVariantProps['size']
  intent?: ButtonVariantProps['intent']
  isLoading?: ButtonVariantProps['isLoading']
  onlyIcon?: ButtonVariantProps['onlyIcon']
  startIcon?: ButtonVariantProps['startIcon']
  endIcon?: ButtonVariantProps['endIcon']
  simple?: ButtonVariantProps['simple']
  formAction?: string
}

export function Button({
  size = 'medium',
  intent = 'primary',
  isLoading = false,
  onlyIcon,
  startIcon,
  endIcon,
  simple,
  children,
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({
        size,
        intent,
        isLoading,
        onlyIcon,
        startIcon,
        endIcon,
        simple,
      })}
    >
      {isLoading && (
        <>
          <span className={styles.cloak} aria-hidden>
            {children}
          </span>
        </>
      )}
      {children}
    </button>
  )
}
