import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BodyComp from './components/BodyComp';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <BodyComp/>
    </div>
  );
}

export default App;
