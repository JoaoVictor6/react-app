 import { DataProvider } from './Context/context';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Home/>
      </DataProvider>
    </div>
  );
}

export default App;
