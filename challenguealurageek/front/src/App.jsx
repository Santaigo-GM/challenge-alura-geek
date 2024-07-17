import {Route, Routes} from 'react-router-dom';
import Inicio from "./components/inicio"

function App() {
    return (
      <>
          <Routes>
              <Route path="/*" element={<Inicio/>}/>
          </Routes>
      </>
    );
  }

export default App