import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import ThankYou from './components/ThankYou'

function App() {

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/thankyou' element={ <ThankYou/> }/>
      </Routes>
    </div>
  )
}

export default App