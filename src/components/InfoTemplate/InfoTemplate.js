import React from 'react'
import css from './InfoTemplate.module.scss'
import ContentStructure from 'components/ContentStructure/ContentStructure'
import ContentWrapper from 'components/Grid/ContentWrapper'
import Button from 'components/Button/Button'
import { ButtonTypes } from 'utils/const'
import classnames from 'classnames'

const InfoTemplate = ({
  children,
  className,
  heading,
  subheading,
  tabsData = [],
  isAddButtonRequired,
  addButtonHandler,
  addButtonLabel,
  selectedTab,
  switchTab,
  isTransparent
}) => {
  const tabItems = tabsData.map(({ type, label }, index) => (
    <li key={`Tab trigger for ${type} - ${index}`}>
      <button
        className={classnames(css.tabTrigger, {
          [css.tabTriggerActive]: type === selectedTab
        })}
        onClick={() => switchTab(type)}
        type='button'
      >
        { label }
      </button>
    </li>
  ))

  return (
    <ContentStructure
      heading={heading}
      className={css.wrapper}
      contentClass={className}
    >
      <>
        <ContentWrapper
          className={classnames(css.top, className, {
            [css.topTransparent]: isTransparent
          })}
        >
          {subheading &&
            <h3 className={css.heading}>
              {subheading}
            </h3>
          }
          {tabsData.length > 0 &&
            <ul className={css.tabTriggers}>
              {tabItems}
            </ul>
          }
        </ContentWrapper>
        {isAddButtonRequired &&
          <ContentWrapper className={css.add}>
            <Button
              className={css.buttonAdd}
              label={addButtonLabel}
              onClick={addButtonHandler}
              buttonType={ButtonTypes.ADD}
            />
          </ContentWrapper>
        }
        { children }
      </>
    </ContentStructure>
  )
}

export default InfoTemplate
