
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import AddWork from './Components/Add New Task/AddWork';

function App() {
  return (
    <div className='bg-pink-200 text-xl text-white h-auto shadow-inner'>
      <div>
        <div className='md:min-h-full pb-12'>
          <Navbar/>
          <Hero/>
          
          <AddWork/>
        </div>
      </div>
    </div>
  );
}

export default App;
