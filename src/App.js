import "./App.css";
import { Navbar } from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Lorem from "./components/Lorem/Lorem";
import DashBoard from "./components/Dashboard/DashBoard";
import NotificationsTab from "./components/Notification/NotificationTab";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/lorem'>
            <div className='App__container'>
              <Navbar className='App__nav' />
              <Lorem />
            </div>
          </Route>
          <Route path='/'>
            <div className='App__container'>
              <Navbar />
              <div className='App__container__columns'>
                <DashBoard />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
