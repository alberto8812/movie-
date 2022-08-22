import './App.css';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import LoadPage from './components/pages/LoadPage';
import Home from './components/pages/Home';
import CharacterCreate from './components/pages/CharacterCreate';
import Detail from './components/common/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
       <Route exact path='/' component={LoadPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/create' component={CharacterCreate}/>
        <Route exact path='/home/:id' component={Detail}/>
     
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
