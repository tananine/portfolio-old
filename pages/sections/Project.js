import Class from './Project.module.scss'
import { navbarActions } from '/store/navbar'
import TerminalIcon from '@mui/icons-material/Terminal'
import {
  Card,
  Grid,
  Dialog,
  DialogActions,
  Button,
  Box,
  Typography,
  Link,
  Divider,
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { useInView } from 'react-hook-inview'
import { useDispatch } from 'react-redux'
import YouTube from 'react-youtube'

const projects = [
  {
    id: 1,
    title: 'Instagram Clone (Front + API)',
    img: require('/public/project/instagram.png'),
    tech: 'Next.js, MUI, Tailwind CSS, Javascript, HTML, CSS, Node.js, Express.js, MariaDB, SQL',
    description: 'Mini Feature : Login, Post, Comment, Like, Profile',
    git: 'https://github.com/tananine/instagram-frontend',
    git2: 'https://github.com/tananine/instagram-backend',
    youtube: 'https://www.youtube.com/watch?v=VNAbSsk_PfA',
    youtubeID: 'VNAbSsk_PfA',
  },
  {
    id: 2,
    title: 'Type Rhythm (Music Game)',
    img: require('/public/project/type-rhythm.png'),
    tech: 'React JS, Javascript, HTML, CSS',
    description: 'Inspired by the audition game',
    git: 'https://github.com/tananine/Type-Rhythm',
    git2: '',
    youtube: 'https://www.youtube.com/watch?v=hpSpqe92AMk',
    youtubeID: 'hpSpqe92AMk',
  },
  {
    id: 2,
    title: 'TipTroup (Ride Sharing)',
    img: require('/public/project/TipTroup.png'),
    tech: 'Ionic, Angular, Typescript, php, phpmyadmin, SQL, Firebase, Google Map',
    description: 'My Final Project (Khonkaen University)',
    git: '',
    git2: '',
    youtube: 'https://www.youtube.com/watch?v=MHgjjKzcvAg',
    youtubeID: 'MHgjjKzcvAg',
  },
]

const Project = () => {
  const dispatch = useDispatch()

  const [ref, isVisible] = useInView({
    threshold: 0.6,
    onEnter: () => {
      dispatch(navbarActions.project())
    },
  })

  const project = () => {
    const opts = {
      height: '230',
      width: '100%',
    }

    return projects.map((project) => {
      const [open, setOpen] = useState(false)

      const handleOpen = () => {
        setOpen(true)
      }

      const handleClose = () => {
        setOpen(false)
      }

      const git = () => {
        if (project.git) {
          return (
            <Typography variant="body2" className="mb-2">
              Github :{' '}
              <Link href={project.git} target="_blank" sx={{ color: 'blue' }}>
                {project.git}
              </Link>
            </Typography>
          )
        }
      }

      const git2 = () => {
        if (project.git2) {
          return (
            <Typography variant="body2">
              Github :{' '}
              <Link href={project.git2} target="_blank" sx={{ color: 'blue' }}>
                {project.git2}
              </Link>
            </Typography>
          )
        }
      }

      return (
        <>
          <Grid item xs={12} sm={6} key={project.id}>
            <Card
              variant="outlined"
              className={Class.project}
              onClick={handleOpen}
            >
              <div className={Class.image}>
                <Image
                  src={project.img}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <div className={Class.content}>{project.title}</div>
            </Card>
          </Grid>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <Box sx={{ padding: 2, width: '100%' }}>
              <Typography className="mb-4" variant="h5">
                {project.title}
              </Typography>
              <Typography>Youtube Video :</Typography>
              <YouTube videoId={project.youtubeID} opts={opts} />
              <Divider sx={{ margin: 3 }} />
              <Typography variant="body2" className="mb-4">
                {project.tech}
              </Typography>
              {project.description ? (
                <Typography variant="body1" className="mb-4">
                  {project.description}
                </Typography>
              ) : (
                ''
              )}
              <Typography variant="body2" className="mb-2">
                Youtube :{' '}
                <Link
                  href={project.youtube}
                  target="_blank"
                  sx={{ color: 'blue' }}
                >
                  {project.youtube}
                </Link>
              </Typography>
              {git()}
              {git2()}
            </Box>
            <DialogActions>
              <Button onClick={handleClose}>close</Button>
            </DialogActions>
          </Dialog>
        </>
      )
    })
  }

  return (
    <div ref={ref} id="Project" className={Class.container}>
      <div className={Class.title}>
        <TerminalIcon className="mr-2" fontSize="large" />
        My Projects
      </div>
      <Grid container spacing={2}>
        {project()}
      </Grid>
    </div>
  )
}

export default Project
