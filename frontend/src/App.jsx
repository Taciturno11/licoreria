import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Importamos las páginas
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// 2. Importamos el Navbar (¡La nueva pieza!)
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      
      {/* 3. Colocamos el Navbar AQUÍ.
          Al estar fuera de <Routes>, se verá fijo en todas las páginas. */}
      <Navbar />

      {/* Aquí cambia el contenido según la URL */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;