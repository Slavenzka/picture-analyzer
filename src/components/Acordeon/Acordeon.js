import React, { useState } from 'react'
import css from './Acordeon.module.scss'
import classnames from 'classnames'
import { Collapse } from 'react-collapse/lib/Collapse'
import IconArrowAcordeon from 'assets/icons/IconArrowAcordeon'

const Acordeon = ({
  children,
  className,
  label = '',
  mathSymbol,
  observer = [],
  isDisabled = false,
  isUppercasedLabel = true
}) => {
  const [isCollapseOpened, toggleCollapseStatus] = useState(false)
  observer.push(() => {
    if (isCollapseOpened) {
      toggleCollapseStatus(false)
    }
  })

  const executeRegisteredObservers = () => {
    observer.forEach(handler => handler())
  }

  return (
    <div className={classnames(css.wrapper, className, { [css.wrapperDisabled]: isDisabled })}>
      <button
        className={classnames(css.trigger, { [css.triggerCapitalized]: isUppercasedLabel })}
        type='button'
        onClick={() => {
          if (!isCollapseOpened && observer.length > 0) {
            executeRegisteredObservers()
          }
          toggleCollapseStatus(isDisabled ? false : !isCollapseOpened)
        }}
      >
        <span className={css.label}>
          { label }
        </span>
        <span className={css.symbol}>
          { mathSymbol }
        </span>
        <IconArrowAcordeon className={classnames(css.icon, { [css.iconOpened]: isCollapseOpened })} />
      </button>
      <Collapse
        isOpened={isCollapseOpened}
        theme={{ collapse: 'ReactCollapse--collapse', content: css.collapse }}
      >
        { children }
      </Collapse>
    </div>
  )
}

export default Acordeon
