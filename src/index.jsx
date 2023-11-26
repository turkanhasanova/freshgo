import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './sass/style.scss';
import configureStore from './manager/store/ConfigStore';
import { Provider } from 'react-redux';
import { getProductsFromDatabase } from './manager/actions/ProductAction';
import photo from '../src/Additional/Ellipsis-1s-200px.gif'





const store = configureStore();



const result = (
  <Provider store={store}>
      <App />
  </Provider>
)


ReactDOM.render(<div className='d-flex justify-content-center align-items-center'><img src={photo} alt="" /></div>, document.getElementById('root'));

store.dispatch(getProductsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})