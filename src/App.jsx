
import AboutMeMain from './components/AboutMe/AboutMeMain'
import ContactMeMain from './components/ContactMe/ContactMeMain'
import ExperieceMain from './components/ExperienceSection/ExperieceMain'
import FooterMain from './components/FooterSection/FooterMain'
import HeroGradient from './components/HeroSection/HeroGradient'
import HeroMain from './components/HeroSection/HeroMain'
import Navbar from './components/NavbarSection/NavbarMain'
import ProjectMain from './components/ProjectSection/ProjectMain'
import SkillMain from './components/SkillSection/SkillMain'
import SubSkill from './components/SkillSection/SubSkill'

function App() {

  return <main className='font-body'>
    <Navbar />
    <HeroMain/>
    <HeroGradient/>
    <AboutMeMain/>
    <SkillMain/>
    <SubSkill/>
    <ExperieceMain/>
    <ProjectMain/>
    <ContactMeMain/>
    <FooterMain/>
  </main>
  
}

export default App
