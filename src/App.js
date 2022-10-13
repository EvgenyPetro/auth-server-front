import { Route, Routes } from 'react-router-dom';
import '../src/styles/global.scss'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import NavBar from './pages/NavBar'
import Home from './pages/Home'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
