import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Base from './layouts/base/Base';
import ToDo from './pages/todo/ToDo';
import Done from './pages/done/Done';

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Base>
            <Route exact path='/' component={ToDo}/>
            <Route path='/done' component={Done}/>
        </Base>
    </BrowserRouter>,
    document.getElementById('root')
);
/*
Сейчас у вас в компоненте Task есть флаг completed. А если появится статус inProgress, а потом readyToReview, а
потом еще 10 разных статусов, то что будете делать?
*/
