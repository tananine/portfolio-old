import Class from './Home.module.scss'
import computer from '/public/computer.gif'
import { navbarActions } from '/store/navbar'
import { Button, Grid } from '@mui/material'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import FadeIn from 'react-fade-in'
import { useInView } from 'react-hook-inview'
import { useDispatch } from 'react-redux'
import { SocialIcon } from 'react-social-icons'
import Typed from 'typed.js'

const Home = () => {
  const el = useRef(null)
  const dispatch = useDispatch()
  const [fade, setFade] = useState(false)

  const [ref, isVisible] = useInView({
    threshold: 0.5,
    onEnter: () => {
      dispatch(navbarActions.home())
      setFade(true)
    },
    onLeave: () => {
      setFade(false)
    },
  })

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Frontend Development',
        'Backend Development',
        'Mobile Development',
        'Web Development',
        'UX UI Designer',
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 500,
      loop: true,
    })

    // Destropying
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <FadeIn visible={fade}>
      <div ref={ref} id="Home" className={Class.container}>
        <Grid container className={Class.box}>
          <Grid item xs={12} md={6} className={Class.left}>
            <h2 className={Class.hello}>Hello,</h2>
            <h1 className={Class.iam}>
              I am <span className={Class.name}>Tanadon</span>
            </h1>
            <h2 className={Class.into}>
              I am into <br className="sm:hidden" />
              <span className="text-[24px] sm:text-[30px]" ref={el} />
            </h2>
            <AnchorLink offset="100" href={`#About`}>
              <Button
                className="hidden md:block"
                style={{
                  backgroundColor: '#7485F3',
                  borderRadius: 35,
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '800',
                  marginBottom: '20px',
                  padding: '10px 36px',
                  textTransform: 'unset',
                  width: '200px',
                }}
                variant="contained"
              >
                About Me
              </Button>
            </AnchorLink>
            <div className={Class.icon}>
              <SocialIcon
                url="https://th.linkedin.com/"
                style={{ width: '35px', height: '35px', marginRight: '5px' }}
              />
              <SocialIcon
                url="https://github.com/"
                style={{ width: '35px', height: '35px', marginRight: '5px' }}
              />
              <SocialIcon
                url="https://www.youtube.com/"
                style={{ width: '35px', height: '35px', marginRight: '5px' }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={Class.right}>
            <div
              className={`${Class.image} w-[200px] sm:w-[250px] md:w-[300px]`}
            >
              <Image
                src={computer}
                alt="computer"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </FadeIn>
  )
}

export default Home
