import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login  />} />  
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
