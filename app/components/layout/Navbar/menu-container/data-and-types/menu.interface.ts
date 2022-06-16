import { IconName } from "@shared/types/icon.types"

export interface IMenuItem {
  icon: IconName,
  title: string,
  link: string
}

export interface IMenu {
  title: string,
  links: IMenuItem[]
}