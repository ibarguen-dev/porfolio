import Contactos from "./Pages/contactos"
import Home from "./Pages/home"
import Aplicaciones from "./Pages/aplicaciones"
import Info from "./Pages/info"
import Skills from "./Pages/skills"
import './css/App.css'
import Estudios from "./Pages/estudios"

function App() {


  return (
    <main>
      <Home/>
      <Info/>
      <Aplicaciones />
      <Skills/>
      <Estudios/>
      <Contactos/>
    </main>
  )
}

export default App
