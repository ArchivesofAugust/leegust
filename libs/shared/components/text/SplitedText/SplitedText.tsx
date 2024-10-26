import { Fragment } from 'react'

import classNames from 'classnames/bind'

import styles from './SplitedText.module.scss'

const cx = classNames.bind(styles)

interface Props {
  target: string
}

const SplitedText = ({ target }: Props) => {
  return (
    <span className={cx('container')}>
      {target.split('\n').map((line, lineIndex, array) => (
        <Fragment key={lineIndex}>
          <span className={cx('line')}>
            {line.split('').map((char, charIndex) => {
              const key = `${lineIndex}-${charIndex}`
              const isSpace = char === ' '
              return (
                <span key={key} className={cx('char', { isSpace })}>
                  {isSpace ? '\u00A0' : char}
                </span>
              )
            })}
          </span>
          {lineIndex < array.length - 1 && <span className={cx('mobileSpace')}>{'\u00A0'}</span>}
        </Fragment>
      ))}
    </span>
  )
}

export default SplitedText
