import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@components/ui/Heading/Heading'
import Button from '@components/ui/form-elements/Button'

import { useAuth } from '@hooks/useAuth'

import Meta from '@utils/meta/Meta'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()

	const [type, setType] = useState<'login' | 'register'>('login')

	const { isLoading } = useAuth()

	const {
		reset,
		handleSubmit,
		formState,
		register: registerInput,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const login = (data: any) => {
		console.table(data)
	}
	const register = (data: any) => {
		console.table(data)
	}

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" />

					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>

					<div className={styles.buttons}>
						<Button
							type="submit"
							disabled={isLoading}
							onClick={() => setType('login')}
						>
							Login
						</Button>
						<Button
							type="submit"
							disabled={isLoading}
							onClick={() => setType('register')}
						>
							register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}
export default Auth
