import './App.css';


const Mensaje = () => {
  return (
    <h1>Hola Mundo</h1>
  )
}


function App() {

  return (
    <div className="App">
      <Mensaje />
      <Mensaje />
    </div>
  );
}

export default App;
