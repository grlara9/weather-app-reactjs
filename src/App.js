import useForecast from './hooks/useForecast';
import './App.css';
import Header from './ui/Header';
import Form from './ui/Form'
import Loader from './ui/Loader';
import Error from './ui/Error'
import Forecast from './components/Forecast';
import { Fragment } from 'react';
function App() {
 const {forecast, isLoading, isError, submitRequest} = useForecast()

  const onSubmit = (value) =>{
    console.log("si llego el valor", {value})
    submitRequest(value)

  }
  console.log("asdfgh>>>", forecast)
  return (
    <Fragment>
    <Header />
      <main>
        {!forecast && ( 

          <div className="App">
        {!isLoading && <Form submitLocation={onSubmit} />}
        {isLoading && <Loader />}
        {isError && <Error message={isError} />}
        </div>
          )}
        {forecast && 
        
        <Forecast forecast={forecast}/>}
       
      </main>
      </Fragment>
    
  );
}

export default App;
