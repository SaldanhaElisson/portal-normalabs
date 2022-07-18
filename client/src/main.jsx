import React from 'react'
import ReactDOM from 'react-dom/client'
import Pages from './templates/BlueHome'
import './assets/styles/global-styles.css'
import './assets/styles/global-styles-responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
)
