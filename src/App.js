import useForecast from './hooks/useForecast';
import './App.css';
import Form from './ui/Form'
function App() {

 const {submitRequest} = useForecast()

  const onSubmit = (value) =>{
    console.log("si llego el valor", {value})
    submitRequest(value)

  }
  return (
    <div className="App">

     <Form submitLocation={onSubmit}/>
    </div>
  );
}

export default App;
