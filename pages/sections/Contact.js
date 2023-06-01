import Class from './Contact.module.scss'
import { navbarActions } from '/store/navbar'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import { Box, Button, Card, CardContent, Grid, TextField } from '@mui/material'
import Image from 'next/image'
import { useInView } from 'react-hook-inview'
import { useDispatch } from 'react-redux'

const Project = () => {
  const dispatch = useDispatch()

  const [ref, isVisible] = useInView({
    threshold: 0.6,
    onEnter: () => {
      dispatch(navbarActions.contact())
    },
  })

  return (
    <div ref={ref} id="Contact" className={Class.container}>
      <div className={Class.title}>
        <ContactPageIcon className="mr-2" fontSize="large" />
        Contact
      </div>
      <Card className={Class.card}>
        <CardContent>
          <Grid container>
            <Grid item xs={6} className="hidden sm:block">
              <div className="relative h-full">
                <Image
                  src={require('/public/contact.png')}
                  alt="contact"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  '& > :not(style)': { p: 1 },
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Message"
                  variant="outlined"
                  sx={{ marginBottom: 1 }}
                />
                <div>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      color: '#000000',
                      ':hover': { color: '#ffffff' },
                    }}
                    disable
                  >
                    ส่งข้อมูล (ปรับปรุง)
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default Project
