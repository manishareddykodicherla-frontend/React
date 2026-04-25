import './App.css';
import Nav from './Components/Nav';
import List from './Components/List';
import Filter from './Components/Filter';
import Input from './Components/Input';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Input/>
      <Filter/>
      <List/>
    </div>
  );
}

export default App;
