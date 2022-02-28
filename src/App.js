
import './App.css';
import Feeds from './components/Feeds';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="App bg-primary flex  ">
  
    <main className=' min-h-screen mx-auto flex  ml-28 '>
    <Sidebar/>
    <Feeds/>

    
    <Widgets/>
    </main>

    </div>
  );
}

export default App;
