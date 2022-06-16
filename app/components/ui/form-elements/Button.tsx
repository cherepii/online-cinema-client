import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import { IButton } from './form.interface'
import styles from './form.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button {...rest} className={cn(styles.button, className)}>
			{children}
		</button>
	)
}
export default Button
