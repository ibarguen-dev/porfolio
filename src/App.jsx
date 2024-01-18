//import Contactos from "./Pages/contactos"
import Home from "./Pages/home"
import Aplicaciones from "./Pages/aplicaciones"
import Info from "./Pages/info"
import './css/App.css'
import Estudios from "./Pages/estudios"
import Footer from "./Componente/footer"
function App() {


  return (
    <main>
      <Home/>
      <Aplicaciones />
      <Estudios/>
      <Info/>
      <Footer/>
    </main>
  )
}

export default App
