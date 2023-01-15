import Class from './Project.module.scss'
import { navbarActions } from '/store/navbar'
import TerminalIcon from '@mui/icons-material/Terminal'
import { Card, Grid } from '@mui/material'
import Image from 'next/image'
import { useInView } from 'react-hook-inview'
import { useDispatch } from 'react-redux'

const projects = [
  {
    id: 1,
    title: 'Instagram Clone (Front + API)',
    img: require('/public/project/instagram.png'),
  },
  {
    id: 2,
    title: 'Type Rhythm (Music Game)',
    img: require('/public/project/type-rhythm.png'),
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
    return projects.map((project) => {
      return (
        <Grid item xs={12} sm={6} key={project.id}>
          <Card variant="outlined" className={Class.project}>
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
