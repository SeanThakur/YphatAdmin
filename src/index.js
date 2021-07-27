/* eslint-disable */ 
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

import { Provider } from 'react-redux'
import store from './store'
import { setCurrentUser } from './feature/actions';
import jwt_decode from "jwt-decode";

if(localStorage.YT_Token)
{
  //Checking if data present in localstorage then login persist
  const data = localStorage.YT_Token;
  const decoded = jwt_decode(data)
  store.dispatch(setCurrentUser(decoded));
}


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
