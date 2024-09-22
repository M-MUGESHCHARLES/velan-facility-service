import './App.css';
<<<<<<< HEAD
import HomePage from './pages/HomePage/HomePage';
import { Layout } from './pages/Layout';
import { AboutUs } from './pages/AboutUsPage/AboutUs';
import { ServiceHomePage } from './pages/ServicePage/ServiceHomePage';
import { ServiceDetailPage } from './pages/ServicePage/ServiceDetailPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
=======
<<<<<<< Updated upstream
import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
=======
import HomePage from './pages/HomePage/HomePage';
import { Layout } from './pages/Layout';
import { AboutUs } from './pages/AboutUsPage/AboutUs';
import { ServiceHomePage } from './pages/ServicePage/ServiceHomePage';
import { ServiceDetailPage } from './pages/ServicePage/ServiceDetailPage';

function App() {
  return (
>>>>>>> b41277ad8d8835fc68ded1582e08fc16eebbb5c2
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
        </Route>
      </Routes>
      </BrowserRouter>      
    </>
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> b41277ad8d8835fc68ded1582e08fc16eebbb5c2
  );
}

export default App;
