import React from 'react';

import Task from '../../components/task/Task';

import list from '../list';

import './style.css';

export default class Done extends React.Component {
    renderList = () => {
        return list.data.map((item, index) => {
            return (
                <Task key={index} id={item.id} title={item.title} completed={true}/>
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.renderList()}
            </React.Fragment>
        );
    };
};