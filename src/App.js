import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';
import HomePage from './pages/HomePage/HomePage';
import { ServiceHomePage } from "./pages/ServicePage/ServiceHomePage";
import { ServiceDetailPage } from "./pages/ServicePage/ServiceDetailPage";
import { AboutUs } from './pages/AboutUsPage/AboutUs';
import ContactUs from './pages/ContactUsPage/ContactUs';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='security-service' element={<ServiceHomePage category='security-service'  />}/>  
          <Route path='facility-service' element={<ServiceHomePage category='facility-service'  />}/>  
          <Route path='manpower-service' element={<ServiceHomePage category='manpower-service'  />}/>  
          <Route path=':category/:serviceName' element={<ServiceDetailPage/>}/>
          <Route path='about-us' element={<AboutUs/>} /> 
          <Route path='contact-Us' element={<ContactUs/>} />   
        </Route>
      </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
