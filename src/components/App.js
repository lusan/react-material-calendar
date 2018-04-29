import React from 'react'
// import Header from '../containers/Header'
// import MainSection from '../containers/MainSection'
// import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot'
import Header from './header'
import Calendar from '../pages/calendar'

import './App.css'

const App = () => (
  <div>
    <Header />
    <div className='page-main'>
      <Calendar />
    </div>
  </div>
)

// export default App
export default withRoot(App)