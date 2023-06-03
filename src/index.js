import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListCardItem from "./ListCardItem.js"
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import {robots} from './robotresponse.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <ListCardItem id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
    <ListCardItem id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
    <ListCardItem id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    <ListCardItem id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
    <ListCardItem id={robots[4].id} name={robots[4].name} email={robots[4].email}/>
    <ListCardItem id={robots[5].id} name={robots[5].name} email={robots[5].email}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
