import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import FooterComponent from './Component/FooterComponent';
import HeaderComponent from './Component/HeaderComponent';
import CreateEmployeeComponent from './Component/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent} />
            <Route path="/entry-employee/:id" component={CreateEmployeeComponent} />
          </Switch>
        </div>
        {/* <FooterComponent /> */}
      </Router>

    </div>
  );
}

export default App;
