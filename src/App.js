import useForecast from './hooks/useForecast';
import './App.css';
import Header from './ui/Header';
import Form from './ui/Form'
import Loader from './ui/Loader';
import Forecast from './components/Forecast';
import { Fragment } from 'react';
function App() {
 const {forecast, isLoading, submitRequest} = useForecast()

 console.log("FORECAST>>>", forecast)
  const onSubmit = (value) =>{
    console.log("si llego el valor", {value})
    submitRequest(value)

  }
  return (
    <Fragment>
    <Header />
      <main>
        <div className="App">
        {!isLoading && <Form submitLocation={onSubmit} />}
        {isLoading && <Loader />}
        <Forecast forecast={forecast} />
    </div>
      </main>
      </Fragment>
    
  );
}

export default App;
