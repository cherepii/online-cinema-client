import { FC } from "react"
import { IMenu } from "./data-and-types/menu.interface"
import MenuItem from "./MenuItem"

import styles from "./Menu.module.scss"

const Menu: FC<{menu: IMenu}> = ({ menu: {title, links}}) => {
  return (
    <div className={styles.menu}>
      <h1 className={styles.title}>{title}</h1>
      <ul className={styles.list}>
        {links.map(link => (
          <MenuItem item={link} key={link.link}/>
        ))}
      </ul>
    </div>  
  )
}
export default Menu 