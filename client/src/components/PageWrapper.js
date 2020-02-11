import React from 'react'
import { useHistory } from 'react-router-dom'

import Navigation from './Navigation'

export default ({ children }) => {
  let history = useHistory()

  return (
    <div>
      <Navigation history={history} />
      <React.Fragment>{children}</React.Fragment>
    </div>
  )
}
