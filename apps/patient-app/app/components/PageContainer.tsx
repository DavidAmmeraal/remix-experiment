import { PropsWithChildren } from 'react'
import { cva } from 'class-variance-authority'

export type PageContainerProps<T extends React.ElementType> = PropsWithChildren<
  {
    as: T
    className: string
  } & React.ComponentProps<T>
>

const pageContainerClasses = cva(['px-md'])

export default function PageContainer<T extends React.ElementType>({
  as: As = 'div',
  className,
  children,
  ...rest
}: PageContainerProps<T>) {
  return (
    <As className={pageContainerClasses({ className })} {...rest}>
      {children}
    </As>
  )
}
