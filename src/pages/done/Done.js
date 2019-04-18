import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Task from '../../components/task/Task';

import './style.css';
import getTaskList from "../../actions/taskList/getTaskList";

class Done extends React.Component {

    componentDidMount() {
        this.props.getTaskList();
    }

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
                {this.renderList(this.props.itemList)}
            </React.Fragment>
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
        getTaskList: bindActionCreators(getTaskList, dispatch)
    });
const mapStateToProps = (state) => ({
        itemList: state.taskListReducer.taskList
    });
export default connect(mapStateToProps, mapDispatchToProps)(Done);