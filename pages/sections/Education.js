import Class from './Education.module.scss'
import { navbarActions } from '/store/navbar'
import SchoolIcon from '@mui/icons-material/School'
import { Card, Grid } from '@mui/material'
import Image from 'next/image'
import { useInView } from 'react-hook-inview'
import { useDispatch } from 'react-redux'

const educations = [
  {
    id: 1,
    img: require('/public/education/kku.png'),
    name: 'Computer Science at Khonkaen University',
    description: 'Khonkaen University | KKU',
    time: '2017 - 2021',
    status: 'Completed',
  },
]

const Education = () => {
  const dispatch = useDispatch()

  const [ref, isVisible] = useInView({
    threshold: 0.6,
    onEnter: () => {
      dispatch(navbarActions.education())
    },
  })

  const education = () => {
    return educations.map(education => {
      return (
        <Card key={education.id} variant="outlined" className={Class.education}>
          <Grid container>
            <Grid item xs={12} sm={4} className={Class.image}>
              <Image
                src={education.img}
                alt={education.name}
                layout="fill"
                objectFit="contain"
              />
            </Grid>
            <Grid item xs={12} sm={8} className={Class.detail}>
              <div className={Class.name}>{education.name}</div>
              <div className={Class.description}>{education.description}</div>
              <div className={Class.status}>
                {education.time} | {education.status}
              </div>
            </Grid>
          </Grid>
        </Card>
      )
    })
  }

  return (
    <div ref={ref} id="Education" className={Class.container}>
      <div className={Class.title}>
        <SchoolIcon className="mr-2" fontSize="large" />
        My Education
      </div>
      {education()}
    </div>
  )
}

export default Education
