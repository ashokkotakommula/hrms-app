import './main.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import MainLayout from './mainLayout/MainLayout';
import Home from './screens/Home/Home'
import Recruitment from './screens/Recruitment/Recruitment'
import Onboarding from './screens/Onboarding/Onboarding';
import Reports from './screens/Reports/Reports';
import Calendar from './screens/Calendar/Calendar';
import Settings from './screens/Settings/Settings';

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" render={(props)=><Home {...props}/>} />
          <Route path="/recruitment" render={(props)=><Recruitment {...props}/>}/>
          <Route path="/onboarding" render={(props) => <Onboarding {...props} />} />
          <Route path="/reports" render={(props) => <Reports {...props} />} />
          <Route path="/calendar" render={(props) => <Calendar {...props} />} />
          <Route path="/settings" render={(props) => <Settings {...props} />} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
