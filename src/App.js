import { Route, Routes } from 'react-router-dom';
import './index.scss'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import SideBar from './components/sidebar/SideBar'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<SideBar />}>
          
          {/* <Route path=':home' element={<Home />} />
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
