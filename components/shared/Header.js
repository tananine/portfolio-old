import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useSelector } from 'react-redux'

const menus = [
  'Home',
  'About',
  'Skill',
  'Education',
  'Project',
  'Experience',
  'Contact',
]

const Icon = ({ display, flexGrow }) => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        display: display,
        flexGrow: flexGrow,
        fontWeight: 600,
        letterSpacing: '.1rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Tanadon{' '}
    </Typography>
  )
}

const Header = (props) => {
  const activeMenu = useSelector((state) => state.navbar.menu)

  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          {Icon({ display: { xs: 'none', md: 'flex' }, flexGrow: 0 })}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menus.map((menu) => {
                return (
                  <AnchorLink offset="100" href={`#${menu}`} key={menu}>
                    <MenuItem
                      onClick={() => {
                        handleCloseNavMenu
                      }}
                      sx={{
                        color: menu === activeMenu ? 'black' : 'gray',
                        textUnderlineOffset: '10px',
                      }}
                    >
                      <Typography textAlign="center">{menu}</Typography>
                    </MenuItem>
                  </AnchorLink>
                )
              })}
            </Menu>
          </Box>
          {Icon({ display: { xs: 'flex', md: 'none' }, flexGrow: 1 })}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              justifyContent: 'end',
            }}
          >
            {menus.map((menu) => {
              return (
                <AnchorLink offset="100" href={`#${menu}`} key={menu}>
                  <Button
                    onClick={() => {
                      handleCloseNavMenu
                    }}
                    sx={{
                      color: menu === activeMenu ? 'white' : 'gray',
                      borderBottom:
                        menu === activeMenu ? '2px solid white' : '',
                      borderRadius: '0',
                      display: 'block',
                      textTransform: 'unset',
                    }}
                  >
                    {menu}
                  </Button>
                </AnchorLink>
              )
            })}
          </Box>
          <Box width="48px" className="md:hidden" />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
