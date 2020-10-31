import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Root } from './views/Root';

import * as serviceWorker from './serviceWorker';

// const blueBoxes: IBox[] = Array(4)
//     .fill(null)
//     .map(() => ({
//         bgColor: 'blue',
//         isSelected: false,
//     }));
//
// const randomBoxes: IBox[] = Array(4)
//     .fill(null)
//     .map(() => ({
//         bgColor: 'green',
//         isSelected: false,
//     }));

ReactDOM.render(
  <React.StrictMode>
    <Root />
    {/*<Root boxes={[...blueBoxes, ...randomBoxes]} />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
