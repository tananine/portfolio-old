import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Home from './sections/Home'
import Project from './sections/Project'
import Skill from './sections/Skill'
import BasePage from '/components/BasePage'
import BaseLayout from '/components/layouts/BaseLayout'
import { Divider } from '@mui/material'

const Index = () => {
  return (
    <BaseLayout>
      <BasePage title="Tanadon | รับสร้างเว็บไซต์">
        <Home />
        <Divider />
        <About />
        <Divider />
        <Skill />
        <Divider />
        <Education />
        <Divider />
        <Project />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </BasePage>
    </BaseLayout>
  )
}

export default Index
