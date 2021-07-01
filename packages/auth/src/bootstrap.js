import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './app';

// mount function to start up the app
const mount = (el, {
  onNavigate, defaultHistory, initialPath, onSignIn,
}) => {
  const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });
  if (onNavigate) { history.listen(onNavigate); }
  ReactDom.render(
    <App history={history} onSignIn={onSignIn} />,
    el,
  );
  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

// if we are in development and in isolation
// call moun immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function

export { mount };
