import store from '/store/index'
import '/styles/tailwind.css'
import { StyledEngineProvider } from '@mui/material'
import { Provider } from 'react-redux'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </Provider>
  )
}

export default MyApp
