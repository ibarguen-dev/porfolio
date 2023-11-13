import Navbar from './component/navbar'
import Home from './component/Home'
import Info from './component/info'
import Aplicaciones from './component/aplicaciones'
import Skills from './component/skills'
import Estudios from './component/estudios'
import './css/App.css'

function App() {


  return (
    <main>
      <Navbar/>
      <Home/>
      <Info/>
      <Aplicaciones/>
      <Skills/>
      <Estudios/>
    </main>
  )
}

export default App
