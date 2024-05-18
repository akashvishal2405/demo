
import './App.css'
import MenuBar from './MenuBar'
import Burger from './Burger';
import BreadOmlet from './BreadOmlet/BreadOmlet';
import Falooda from './Falooda/Falooda';
import Juice from './Juice/Juice';
import Magi from './Magi/Magi';
import Mojito from './Mojito/Mojito';
import Orea from './Orea/Orea';
import Shakes from './Shakes/Shakes';
import Spicalshakes from './SpicalShakes/Spicalshakes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
    
    <Routes>
       

        <Route  path='/' element={<MenuBar />}> 
        <Route  path='burger' element={<Burger />}/>
        <Route   path='falooda' element={<Falooda />}/>
        <Route   path='breadomlet' element={<BreadOmlet />}/>
        <Route   path='juice' element={<Juice />}/>
        <Route   path='magi' element={<Magi />}/>
        <Route   path='mojito' element={<Mojito />}/>
        <Route   path='orea' element={<Orea />}/>
        <Route   path='shakes' element={<Shakes />}/>
        <Route   path='spical' element={<Spicalshakes />}/>
       
   
      </Route>

     
    
      
    </Routes>
    
    
    </BrowserRouter>

    {/* <MenuBar />
    <Burger />
    <BreadOmlet />  
    <Falooda />
    <Juice />
    <Magi />
    <Mojito />
    <Orea />
    <Sandwich />
    <Shakes />
    <Spicalshakes /> */}

    </>
  )
}

export default App
