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
                    <li className='task-options__option tasks-options__option_edit'>
                        {this.edit()}
                    </li>
                    <li className='task-options__option tasks-options__option_delete'>
                        <Button taskId={this.props.id}
                                className={"task__button"}
                                iconClassName={"button-delete"}
                                onPress={this.processButtonClick}
                        />
                    </li>
                </ul>
            </article>
        );
    };
    processButtonClick(id) {
        alert(id);
    };

    select = () => {
        if (this.props.completed) {
            return <Icon src={"./images/check_mark.svg"}/>
        }
        return <Button taskId={this.props.id}
                       className={"task__button"}
                       iconClassName={"button-complete"}
                       onPress={this.processButtonClick}
        />;
    };

    edit = () => {
        if (this.props.completed) {
            return '';
        }
        return <Button taskId={this.props.id}
                       className={"task__button"}
                       iconClassName={"button-edit"}
                       onPress={this.processButtonClick}
        />;
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


