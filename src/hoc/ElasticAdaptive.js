import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { setFontSize } from 'store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'utils'

// hoc for html font size adjustment in correspondence with user's screen width
const ElasticAdaptive = ({ children }) => {
  const state = useSelector(state => state.elastic.config)
  const dispatchtFontSize = useDispatch()

  useEffect(() => {
    changeSize()
    window.addEventListener('resize', debounce(changeSize))
    window.addEventListener('orientationchange', debounce(changeSize))

    return () => {
      window.removeEventListener('resize', debounce(changeSize))
      window.removeEventListener('orientationchange', debounce(changeSize))
    }
  })

  const changeSize = () => {
    let width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth
    const html = document.documentElement
    const {widthLimit, baseWidth} = state
    let {baseSize} = state
    let actualWidth = width

    if (widthLimit) {
      actualWidth = Math.min(width, widthLimit)
    }

    const currentSize = actualWidth / baseWidth * baseSize
    dispatchtFontSize(setFontSize(currentSize))
    html.style.fontSize = currentSize + 'px'
  }

  return children
}

export default withRouter(ElasticAdaptive)
