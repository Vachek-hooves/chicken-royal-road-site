import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import HowToPlay from './components/HowToPlay/HowToPlay'
import Features from './components/Features/Features'
import CtaBanner from './components/CtaBanner/CtaBanner'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HowToPlay />
        <Features />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
