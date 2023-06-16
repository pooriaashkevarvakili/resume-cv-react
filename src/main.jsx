import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { I18nextProvider } from 'react-i18next';
import ReactPDF from '@react-pdf/renderer';
import "./assets/tailwind.css"
import i18n from "./i18n.js"
import "./assets/iransans.css"
import PrintableComponent from './PrintableComponent.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>

  </React.StrictMode>,
)
ReactPDF.render(<PrintableComponent />);
