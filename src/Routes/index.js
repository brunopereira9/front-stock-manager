import { Switch } from 'react-router-dom';
import { RouteWrapper } from './Routes' ;
import { Home } from '../Pages/Home';
import { NotFound } from '../Pages/404';

export const Routes = () => {
  return(
    <>
      <Switch>
        <RouteWrapper exact path="/" component={Home} />
        <RouteWrapper path="*" component={NotFound} />
      </Switch>
    </>
  );
}