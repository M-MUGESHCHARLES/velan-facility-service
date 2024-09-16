import './App.css';
import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import QuickWhatsapp from './components/QuickWhatsapp/QuickWhatsapp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuickWhatsapp />
      <Footer />
    </div>
  );
}

export default App;
