import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JournalApp } from './JournalApp.jsx'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import './styles.css';
import 'animate.css';
import 'sweetalert2/dist/sweetalert2.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
