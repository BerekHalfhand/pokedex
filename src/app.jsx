import React from 'react'
import { Route } from 'react-router-dom'

import User from './components/pages/user.jsx'
import Pokelist from './components/pages/pokelist.jsx'

const App = props => (
  <section className="row layout">
    <article id="app-body" className="main col-10 py-3">
      <Route exact path='/' component={Pokelist} {...props} />
      <Route exact path='/user' component={User} {...props} />
    </article>
  </section>
)

export default App
