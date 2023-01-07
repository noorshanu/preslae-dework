import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import MainPage from "./Pages/MainPage";
import PriSale from './Pages/PriSale';

function App() {
  return (
    <>
   <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>}/>
          <Route exact path="/private-sale" element={<PriSale/>}/>
         
        
        </Routes>
    </Router>
     
    </>
  );
}

export default App;
