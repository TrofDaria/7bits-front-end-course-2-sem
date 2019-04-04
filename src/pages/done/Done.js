import React from 'react';
import { connect } from 'react-redux';

import Task from '../../components/task/Task';

import list from '../todo/list';

import './style.css';

class Done extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: list.data
        };
    };

    renderList = (itemList) => {
        return itemList.map((item, index) => {
            return (
                <Task key={index} id={item.id} title={item.title} completed={true}/>
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.renderList(this.state.itemList)}
            </React.Fragment>
        );
    };
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, null)(Done);