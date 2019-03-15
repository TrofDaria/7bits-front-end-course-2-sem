import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import EditButton from "./edit-button/EditButton";
import CompleteButton from "./complete-button/CompleteButton";

export default class Task extends React.Component {
    render() {
        return (
            <article className="task">
                <div>
                    {this.select()}
                <p className="task__title">{this.props.title}</p>
                </div>
                <ul className="task-options">
                    <li className='task-options__option'>
                        {this.edit()}
                        </li>
                    <li className='task-options__option'><button className='task-options__option-button option-delete'></button></li>
                </ul>
            </article>
        );
    };
    edit=()=>{
        if(this.props.completed){
            return '';
        }
        return <EditButton />;
    };
    select=()=>{
        if(this.props.completed){
            return <img src='images/V.svg' className='task-check'></img>;
        }
        return <CompleteButton />;
    };
};

Task.propTypes = {
    title: PropTypes.string,
    completed: PropTypes.bool
};

Task.defaultProps = {
    title: '',
    completed: true
};
