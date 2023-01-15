import HomeIcon from '@mui/icons-material/Home'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailIcon from '@mui/icons-material/Mail'
import { Button, Container, Divider, Grid } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SocialIcon } from 'react-social-icons'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '',
  },
  {
    id: 2,
    title: 'About',
    url: '',
  },
  {
    id: 3,
    title: 'Skill',
    url: '',
  },
  {
    id: 4,
    title: 'Education',
    url: '',
  },
  {
    id: 5,
    title: 'Project',
    url: '',
  },
  {
    id: 6,
    title: 'Experience',
    url: '',
  },
  {
    id: 7,
    title: 'Contact',
    url: '',
  },
]

const Footer = () => {
  const qlink = () => {
    return links.map(link => {
      return (
        <AnchorLink offset="95" href={`#${link.title}`} key={link.id}>
          <Button
            size="small"
            sx={{
              justifyContent: 'flex-start',
              width: 'fit-content',
              textTransform: 'unset',
              color: 'white'
            }}
          >
            ● {link.title}
          </Button>
        </AnchorLink>
      )
    })
  }

  return (
    <footer className="bg-[#05011F] text-white">
      <Container>
        <Grid container className="py-4">
          <Grid item xs={12} md={4} className="p-4">
            <div className="mb-4 text-[20px] font-bold">Tanadon Portfolio</div>
            <div>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </div>
          </Grid>
          <Grid item xs={12} md={4} className="flex flex-col p-4">
            <div className="mb-4 text-[20px] font-bold">Quick Links</div>
            {qlink()}
          </Grid>
          <Grid item xs={12} md={4} className="p-4">
            <div className="mb-4 text-[20px] font-bold">Contact Info</div>
            <div className="mb-2">
              <LocalPhoneIcon /> +66 992-944-988
            </div>
            <div className="mb-2">
              <MailIcon /> tana9dev@gmail.com
            </div>
            <div className="mb-6">
              <HomeIcon /> 40000 Thailand
            </div>
            <div>
              <SocialIcon
                url="https://th.linkedin.com/"
                style={{ width: '35px', height: '35px', marginRight: '10px' }}
                bgColor="white"
              />
              <SocialIcon
                url="https://github.com/"
                style={{ width: '35px', height: '35px', marginRight: '10px' }}
                bgColor="white"
              />
              <SocialIcon
                url="https://www.youtube.com/"
                style={{ width: '35px', height: '35px', marginRight: '10px' }}
                bgColor="white"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ bgcolor: 'white' }} />
      <div className="p-4 text-center text-[14px]">
        Develop by Tanadon Chiraphaisansakun
      </div>
    </footer>
  )
}

export default Footer
