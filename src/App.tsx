import Navbar from './components/Navbar'
import Register from './components/Register'
import Campers from './components/Campers'
import PageNotFound from './components/PageNotFound'
import {Routes ,Route} from "react-router-dom"

import './App.css'

function App() {

  return (
    <>
      <Navbar></Navbar>
      

      <Routes>

    <Route path='/campers'>
    <Route path='' element={<Campers/>} />
    <Route path='Register' element={<Register/>}/>
    </Route>

    <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default App
