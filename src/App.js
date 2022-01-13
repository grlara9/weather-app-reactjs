import useforecast from './hooks/useForecast';
import './App.css';
import Form from './ui/Form'
function App() {

  useforecast()
  
  return (
    <div className="App">

     <Form />
    </div>
  );
}

export default App;
