import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// $(document).ready(() => {
//   $('.cjenovnici').on('hover', () => {
//     $('.sk-cjenovnici').css('margin-left', '2em')
//   })
// })