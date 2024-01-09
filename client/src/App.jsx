import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './pages/Users'
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'
 

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/create" element={<CreateUser />}/>
          <Route path="/update/:id" element={<UpdateUser />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
