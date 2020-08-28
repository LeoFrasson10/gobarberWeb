import React from 'react';
import { RouteProps as ReactDOMRouterProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component,...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={( { location } ) => {
        return isPrivate && !!user ? (
            <Component />
          ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard', state: { from: location} }} />


        )
      }}
    />
  );
};

export default Route;

//true/true == ok
//true/false == redirecionar ele pro login
//false/true == redirecionar para o dashboard
//false/false == ok
