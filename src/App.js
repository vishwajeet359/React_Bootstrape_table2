import './App.css';
import DataList from './DataList';
//import Navbar from './SideBar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  

  return (
    <div className="App">
      <Router>
     
      <Switch>
        <Route path="/" />
        </Switch>
    </Router>
    <DataList />
    </div>
  );
}

export default App;
