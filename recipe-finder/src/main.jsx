import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import "./styles/index.css"

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
