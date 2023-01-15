import store from '/store/index'
import '/styles/tailwind.css'
import { Provider } from 'react-redux'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
