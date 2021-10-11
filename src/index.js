import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';

//css files
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './assets/css/project.css';
import './assets/css/ckeditor.css';
import './assets/css/dataTables.bootstrap4.min.css';
import 'react-toastify/dist/ReactToastify.css';

//js files
import './assets/js/classynav';
import './assets/js/sticky';
import './assets/js/active';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();