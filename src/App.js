import './App.css';
import Barra from './componentes/barra';
import Pie from './componentes/pie';
import Formulario from './componentes/formulario';
import './estilos/estilos.css';

function App() {
  return (
    <div className="App">
      <Barra/>
      <Formulario/>
      <Pie/>
    </div>

  );
}

export default App;
