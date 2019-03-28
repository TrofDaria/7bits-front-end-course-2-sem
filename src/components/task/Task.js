import React from 'react';
import PropTypes from 'prop-types';

import Button from "../button/Button";
import Icon from "../icon/Icon";

import './style.css';

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
                    <li className='task-options__option'>
                        <Button taskId={this.props.id} iconClassName={"button-delete"}/>
                    </li>
                </ul>
            </article>
        );
    };

    select = () => {
        if (this.props.completed) {
        }
        return <Button taskId={this.props.id} iconClassName={"button-complete"}/>;
    };

    edit = () => {
        if (this.props.completed) {
            return '';
        }
        return <Button taskId={this.props.id} iconClassName={"button-edit"}/>;
    };
};

Task.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
};

Task.defaultProps = {
    title: '',
    completed: true
};


