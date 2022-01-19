import useForecast from './hooks/useForecast';
import './App.css';
import Form from './ui/Form'
import Loader from './ui/Loader';
function App() {
 const {submitRequest} = useForecast()

  const onSubmit = (value) =>{
    console.log("si llego el valor", {value})
    submitRequest(value)

  }
  return (
    <div className="App">

     <Form submitLocation={onSubmit}/>
     <Loader />
    </div>
  );
}

export default App;
