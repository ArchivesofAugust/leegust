import * as PhosphorIcons from '@phosphor-icons/react'
import { IconProps as PhosphorIconProps } from '@phosphor-icons/react'

export type PhosphorIconName = keyof typeof PhosphorIcons

interface Props extends Omit<PhosphorIconProps, 'name'> {
  name: PhosphorIconName
}

const RawIcon = ({ name, ...props }: Props) => {
  // eslint-disable-next-line import/namespace
  const IconComponent = PhosphorIcons[name] as React.ComponentType<PhosphorIconProps>
  return <IconComponent {...props} />
}

export default RawIcon
