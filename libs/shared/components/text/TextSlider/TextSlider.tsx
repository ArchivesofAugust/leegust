import classNames from 'classnames/bind'

import styles from './TextSlider.module.scss'

const cx = classNames.bind(styles)

interface Props {
  value: string
  hoverValue?: string
}

const TextSlider = ({ value, hoverValue = 'yongwoo' }: Props) => {
  return (
    <span className={cx('wrapper')}>
      <span className={cx('textContainer')}>
        <span className={cx('item', 'default')}>{value}</span>
        <span className={cx('item', 'hover')}>{hoverValue}</span>
      </span>
    </span>
  )
}

export default TextSlider
