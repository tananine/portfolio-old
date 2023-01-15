import Class from './Skill.module.scss'
import { navbarActions } from '/store/navbar'
import FitbitIcon from '@mui/icons-material/Fitbit'
import { Card, Grid } from '@mui/material'
import Image from 'next/image'
import { useInView } from 'react-hook-inview'
import { useDispatch } from 'react-redux'

const skills = [
  {
    id: 1,
    img: require('/public/skills/ReactJS.png'),
    title: 'ReactJS',
  },
  {
    id: 3,
    img: require('/public/skills/NodeJS.png'),
    title: 'NodeJS',
  },
  {
    id: 4,
    img: require('/public/skills/ExpressJS.png'),
    title: 'ExpressJS',
  },
  {
    id: 5,
    img: require('/public/skills/VueJS.png'),
    title: 'VueJS',
  },
  {
    id: 6,
    img: require('/public/skills/NuxtJS.png'),
    title: 'NuxtJS',
  },
  {
    id: 7,
    img: require('/public/skills/Vuetify.png'),
    title: 'Vuetify',
  },
  {
    id: 8,
    img: require('/public/skills/NextJS.png'),
    title: 'NextJS',
  },
  {
    id: 9,
    img: require('/public/skills/Flutter.png'),
    title: 'Flutter',
  },
  {
    id: 10,
    img: require('/public/skills/MaterialUI.png'),
    title: 'MaterialUI',
  },
  {
    id: 11,
    img: require('/public/skills/TailwindCSS.png'),
    title: 'TailwindCSS',
  },
  {
    id: 13,
    img: require('/public/skills/HTML5.png'),
    title: 'HTML5',
  },
  {
    id: 14,
    img: require('/public/skills/CSS3.png'),
    title: 'CSS3',
  },
  {
    id: 15,
    img: require('/public/skills/JavaScript.png'),
    title: 'JavaScript',
  },
  {
    id: 17,
    img: require('/public/skills/MySQL.png'),
    title: 'MySQL',
  },
  {
    id: 18,
    img: require('/public/skills/Bootstrap.png'),
    title: 'Bootstrap',
  },
  {
    id: 19,
    img: require('/public/skills/Sequelize.png'),
    title: 'Sequelize',
  },
  {
    id: 20,
    img: require('/public/skills/Git.png'),
    title: 'Git',
  },
  {
    id: 23,
    img: require('/public/skills/Laravel.png'),
    title: 'Laravel',
  },
  {
    id: 24,
    img: require('/public/skills/WordPress.png'),
    title: 'WordPress',
  },
]

const Skill = () => {
  const dispatch = useDispatch()

  const [ref, isVisible] = useInView({
    threshold: 0.6,
    onEnter: () => {
      dispatch(navbarActions.skill())
    },
  })

  const skill = () => {
    return skills.map((skill) => {
      return (
        <Grid item key={skill.id} xs={6} sm={4} md={3} lg={2}>
          <Card variant="outlined" className={Class.skill}>
            <div className="mb-4" />
            <Image
              src={skill.img}
              alt={skill.title}
              width="50"
              height="50"
              objectFit="contain"
            />
            <div className="mt-4">{skill.title}</div>
          </Card>
        </Grid>
      )
    })
  }

  return (
    <div ref={ref} id="Skill" className={Class.container}>
      <div className={Class.title}>
        <FitbitIcon className="mr-2" fontSize="large" />
        Skills & Abilities
      </div>
      <Grid container spacing={1}>
        {skill()}
      </Grid>
    </div>
  )
}

export default Skill
