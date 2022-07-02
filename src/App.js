import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Cryptosecurity from './Components/Cryptosecurity/Cryptosecurity';
import Platform from './Components/Platform/Platform';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='clr App ' >
      <Header></Header>
      <Cryptosecurity></Cryptosecurity>
      <Platform></Platform>
      <Footer></Footer>
    </div>
  );
}
export default App;