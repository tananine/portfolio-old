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
            <TimelineDot sx={{ backgroundColor: 'white' }}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 22 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3099 29.1686H15.5201C14.8433 29.1686 14.2568 28.8989 13.7605 28.4495L13.7154 28.4045L11.2791 25.8877V26.6517C11.2791 28.045 10.1512 29.1686 8.7526 29.1686H2.52652C1.12791 29.1686 0 28.045 0 26.6517V11.5506C0 10.8315 0.315816 10.1573 0.812097 9.66293L4.1056 6.6517C5.09817 5.75282 6.63213 5.75282 7.62469 6.74158L15.475 14.5618C16.2871 15.3708 16.2871 16.7191 15.475 17.5281C14.6629 18.3371 13.3094 18.3371 12.4973 17.5281L5.77491 10.8764L4.19584 12.3146V24.9888H7.03818V21.7528C7.03818 20.7191 7.62469 19.8202 8.57214 19.4157C9.51958 19.0112 10.6024 19.236 11.3242 19.9101L11.3694 19.9551L16.2419 24.9888H17.6406V12.8989L8.25632 3.55057C7.44422 2.74158 7.44422 1.39327 8.25632 0.584281C9.06842 -0.224708 10.4219 -0.224708 11.234 0.584281L21.0694 10.382C21.5657 10.8764 21.7913 11.5056 21.7913 12.1798V26.6068C21.8364 28.045 20.7085 29.1686 19.3099 29.1686Z"
                  fill="#00AEEF"
                />
              </svg>
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
