import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/components/App'
import './views/styles/index.css'
import "./views/styles/navbar.css"
import "./views/styles/hero.css"
import "./views/styles/banner.css"
import "./views/styles/dropdown.css"
import "./views/styles/programs.css"
import "./views/styles/footer.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
