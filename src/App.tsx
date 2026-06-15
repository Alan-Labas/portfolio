import Navbar from './components/navbar.tsx'
import Projects from './section/Projects.tsx'
import Skills from './section/Skills.tsx'
import About from './section/About.tsx'
import Hero from "./section/Hero.tsx";
import Contacts from "./section/Contacts.tsx";
import {Analytics} from "@vercel/analytics/react";

import './App.css'

function App() {

  return (
    <>
        <Navbar />
        <Hero />
        <About/>
        <Projects />
        <Skills />
        <Contacts />
        <Analytics />
    </>
  )
}

export default App
