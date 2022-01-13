import useforecast from './hooks/useForecast';
import './App.css';
import Form from './ui/Form'
function App() {

  useforecast()

  const onSubmit = (value) =>{
    console.log("si llego el valor", {value})

  }
  return (
    <div className="App">

     <Form submitLocation={onSubmit}/>
    </div>
  );
}

export default App;
