import Footer from '/components/shared/Footer'
import Header from '/components/shared/Header'
import { ThemeProvider, createTheme } from '@mui/material'

const BaseLayout = props => {
  const { children } = props

  // MUI SETTING THEME
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        main: '#05011F',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default BaseLayout
