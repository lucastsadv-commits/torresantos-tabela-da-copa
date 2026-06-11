import Header from './components/Header'
import Hero from './components/Hero'
import TabelaGallery from './components/TabelaGallery'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TabelaGallery />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
