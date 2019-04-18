import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Base from './layouts/base/Base';
import ToDo from './pages/todo/ToDo';
import Done from './pages/done/Done';

import store from './store/store';
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Base>
                <Route exact path='/' component={ToDo}/>
                <Route path='/done' component={Done}/>
            </Base>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
/**
 * - submitButtonClassName - крайне странный метод. Чтобы обойтись без него, рекомендую использовать пакет classNames,
 * с помощью которого можно будет обойтись без таких методов.
 - Из-за того, что один и тот же класс Button используется и для кнопки добавления задачи, и для кнопок редактирования
 и удаления задачи, при попытке добавить новую задачу всплывает предупреждение с текстом сообщения undefined,
 т.к. у задачи ещё нет ID, чтобы его вывести. Чтобы избежать таких ситуцаий, рекомендую разбить эти кнопки на разные компоненты.
 - Кнопка добавления задачи слишком близко расположена к текстовому полю, также они должны быть по высоте примерно одинаковыми.
 - Если присмотреться к макету, то можно заметить, что у кнопки добавления задачи есть тенью
 - Рекомендую почистить код от комментариев и лишних console.log().
 * */
