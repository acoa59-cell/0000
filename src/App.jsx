import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'

export default function App() {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <About />
      <Works />
    </main>
  )
}
