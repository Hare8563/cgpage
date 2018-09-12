import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Store from './Store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

interface Component {
  component: JSX.Element;
  container: string;
}

const components: Component[] = [
  {
    component: (
      <Provider store={Store}>
        <App />
      </Provider>
    ),
    container: 'root',
  },
];

components.forEach((comp: Component) => {
  ReactDOM.render(comp.component, document.getElementById(comp.container) as HTMLElement);
});

registerServiceWorker();
