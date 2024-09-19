import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Layout } from './pages/Layout';
import { AboutUs } from './pages/AboutUsPage/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='About-Us' element={<AboutUs/>} />        
        </Route>
      </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
