import React, {useState} from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <Services />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home