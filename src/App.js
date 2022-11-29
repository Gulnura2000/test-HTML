import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import Auth from './screen/Auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AskScreen from './screen/AskScreen';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Auth/>}/>
      <Route path='/ask/:id' element = {<AskScreen/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
