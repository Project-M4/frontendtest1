import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Map from './components/Map';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/map" component={Map} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;