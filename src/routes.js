import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import App from './app.jsx'

const Root = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
)

export default Root
