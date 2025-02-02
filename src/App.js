
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  
}from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#23114e';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
   <>
   <Router>

   <Navbar title="My-App" mode= {mode} toggleMode={toggleMode} key={new DataTransfer()}/>
   <Alert alert={alert}/>
   <div className="container my-3">

    <Routes>
      <Route exact path="/about" element={<About/>}>
      </Route>

      <Route exact path="/" element={
      <TextForm showAlert={showAlert} heading="Enter the text analyze" mode={mode}/>}>
      </Route>
    
    </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;
