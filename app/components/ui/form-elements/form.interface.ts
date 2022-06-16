import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string
	error?: FieldError | null
}

type TypeInputField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputField {}
