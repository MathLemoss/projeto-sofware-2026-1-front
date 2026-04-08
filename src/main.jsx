import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-47408b7hxr8r67xb.us.auth0.com"
      clientId="XTIP6KEZuPqpoOUbzFc0IvRrU2BhOp9A"
      authorizationParams={{
        audience: "https://dev-47408b7hxr8r67xb.us.auth0.com/api/v2/",
        redirect_uri: window.location.origin
      }}
    >
    <App />
  </Auth0Provider>,
)