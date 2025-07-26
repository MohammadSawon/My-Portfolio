import { NavBar } from '../NavBar/NavBar'
import { Banner } from '../Banner/Banner'
import { Projects } from '../Projects/Projects'
import './home.css'
import { Titles } from '../../utils/Title/Titles'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer'

export const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <Banner/>
      <Titles titleName={'Projects'}/>
      <Projects/>
      <Projects/>
      <Titles titleName={"Contact"}/>
      <Contact/>
      <Footer/>
    </div>
  )
}
