import * as Icons from "react-icons/md"
import { IconName } from "@shared/types/icon.types"
import { FC } from "react"

const Icon: FC<{name: IconName}> = ({ name }) => {
  const IconComponent = Icons[name]

  return <IconComponent /> || <Icons.MdDragIndicator />
}

export default Icon