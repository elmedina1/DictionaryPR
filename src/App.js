import './App.css';
import logo from './foxlogo.png';
import DictionarySearch from './DictionarySearch';

function App() {
  return (
    <div className="App">
      <div className="header-logo">
        <img src={logo} alt="fox-logo" />
      </div>
      <main>
        <DictionarySearch />
      </main>
    </div>
  );
}

export default App;
