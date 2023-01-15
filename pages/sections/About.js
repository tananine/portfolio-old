import Class from './About.module.scss'
import profile from '/public/profile.jpg'
import { navbarActions } from '/store/navbar'
import PersonIcon from '@mui/icons-material/Person'
import { Button, Grid } from '@mui/material'
import Image from 'next/image'
import { useInView } from 'react-hook-inview'
import { useDispatch } from 'react-redux'

const About = () => {
  const dispatch = useDispatch()

  const [ref, isVisible] = useInView({
    threshold: 0.6,
    onEnter: () => {
      dispatch(navbarActions.about())
    },
  })

  return (
    <div ref={ref} id="About" className={Class.container}>
      <div className={Class.title}>
        <PersonIcon className="mr-2" fontSize="large" />
        About Me
      </div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div
            className={`${Class.image} mb-[18px] h-[220px] w-[220px] sm:h-[250px] sm:w-[250px] md:mb-0 md:h-[300px] md:w-[300px]`}
          >
            <Image
              src={profile}
              alt="profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={Class.about}>
          <div className={`${Class.head} text-center md:text-start`}>
            <div className={Class.name}>I am Tanadon Chiraphaisansakun</div>
            <div className={Class.job}>Full Stack Developer</div>
          </div>
          <div className={`${Class.description} text-center md:text-start`}>
            text
          </div>
          <div className={Class.contact}>
            <div>Email : tana9dev@gmail.com</div>
            <div>Phone : +66 992-944-988</div>
          </div>
          <div className={Class.resume}>
            <Button
              className="w-full sm:w-[220px]"
              style={{
                backgroundColor: '#7485F3',
                borderRadius: 35,
                color: 'white',
                fontSize: '14px',
                padding: '10px 36px',
                textTransform: 'unset',
              }}
              variant="contained"
            >
              Resume
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
