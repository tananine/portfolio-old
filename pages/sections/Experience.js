import Class from './Experience.module.scss'
import { navbarActions } from '/store/navbar'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import WorkIcon from '@mui/icons-material/Work'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab'
import { useInView } from 'react-hook-inview'
import { useDispatch } from 'react-redux'

const Project = () => {
  const dispatch = useDispatch()

  const [ref, isVisible] = useInView({
    threshold: 0.6,
    onEnter: () => {
      dispatch(navbarActions.experience())
    },
  })

  return (
    <div ref={ref} id="Experience" className={Class.container}>
      <div className={Class.title}>
        <BusinessCenterIcon className="mr-2" fontSize="large" />
        Experience
      </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            className="text-[14px] sm:text-[18px]"
          >
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <div className="text-[14px] sm:text-[18px]">
              <div className="font-bold" component="span">
                Mana 2018
              </div>
              <div>UXUI Designer</div>
              <div>(Intern)</div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            className="text-[14px] sm:text-[18px]"
          >
            2021 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <div className="text-[14px] sm:text-[18px]">
              <div className="font-bold" component="span">
                NaYoo Coperation
              </div>
              <div>Front-end Devloper</div>
              <div>(Full-time)</div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default Project
