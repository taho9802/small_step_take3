import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './view/About'
import Projects from './view/Projects'
import Contact from './view/Contact'

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
