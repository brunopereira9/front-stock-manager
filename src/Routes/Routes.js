import { Route } from 'react-router-dom';

export const RouteWrapper = ({
  component: Component,
  ...rest
}) => {
  return (
    <>
      <Route
        {...rest}
        render={props => (
          <Component {...props} />
        )}
      />
    </>
  );
}