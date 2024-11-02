import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Resume from './Resume.jsx'

import routeData from './assets/resources/routes.json'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routeData.index} element={<Layout />}>
          <Route index element = {<App/>}/>
          <Route path={routeData.resume} element={<Resume/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
