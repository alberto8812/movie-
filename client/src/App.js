import './App.css';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import LoadPage from './components/pages/LoadPage';
import Home from './components/pages/Home';
import CharacterCreate from './components/pages/CharacterCreate';
import Detail from './components/common/Detail';
import Error404 from './components/pages/Error404';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
       <Route exact path='/' component={LoadPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/create' component={CharacterCreate}/>
        <Route exact path='/home/:id' component={Detail}/>
        <Route exact path='*' component={Error404}/>
     
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
