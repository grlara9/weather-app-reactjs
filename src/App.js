import useForecast from './hooks/useForecast';
import './App.css';
import Form from './ui/Form'
import Loader from './ui/Loader';
function App() {
 const {isLoading, submitRequest} = useForecast()

  const onSubmit = (value) =>{
    console.log("si llego el valor", {value})
    submitRequest(value)

  }
  return (
    <div className="App">
    {!isLoading && <Form submitLocation={onSubmit} />}
    {isLoading && <Loader />}
    
    </div>
  );
}

export default App;
