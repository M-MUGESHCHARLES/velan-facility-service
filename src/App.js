import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Layout } from './pages/Layout';
import { AboutUs } from './pages/AboutUsPage/AboutUs';
import ContactUs from './pages/ContactUsPage/ContactUs';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='About-Us' element={<AboutUs/>} />
          <Route path='Contact-Us' element={<ContactUs/>} />   
        </Route>
      </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
