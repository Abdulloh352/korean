import Advantages from './components/Advantages'
import Contact from './components/Contact'
import Courses from './components/Courses'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="mesh-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Advantages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
