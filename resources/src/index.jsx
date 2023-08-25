import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './style.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux';
import configureStore from './manager/store/configureStore';
import { getMoviesFromDatabase } from './manager/actions/movieActions';


const mystore = configureStore();

const result = (
  <Provider store={mystore}>
  <App />
</Provider>
)



ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));


mystore.dispatch(getMoviesFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById('root'));
})


