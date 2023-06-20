import './App.css';
import NAME from './Components/Name';
import PRICE from './Components/Price';
import DESCR from './Components/Desc';
import turb from './turbo.jpg'

function App() {
  return (
    <div className='App'>
    <div><NAME></NAME></div>
    <div><PRICE></PRICE></div>
    <div><DESCR></DESCR></div>
    <div ><img className='image' src={turb} alt="Logo" /></div>
    
    
    
    </div>
  );
}

export default App;
