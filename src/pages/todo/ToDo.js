import React from 'react';
import { connect } from 'react-redux';

import Task from '../../components/task/Task';
import FormField from '../../components/formField/FormField';
import Button from '../../components/button/Button';

import list from './list';

import './style.css';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            submitAllowed: false,
            itemList: list.data
        };
    };

    onChange=(event)=>{
        console.log(this.state.itemList);
        this.setState({
            value: event.target.value,
            submitAllowed: event.target.value !== ''
        });
    };

    onSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            value: '',
            submitAllowed: false,
            itemList:[
                {"id": (this.state.itemList).length, "title": this.state.value },
                ...this.state.itemList
            ]
        })
    };

    submitButtonClassName=()=>{
        if(this.state.submitAllowed){
            return "form__button form__button_active";
        } else return "form__button"
    };

    renderList = (itemList) => {
        return itemList.map((item, index) => {
            return (
                <Task key={index} id={item.id} title={item.title} completed={false}/>
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                <form
                    className="form"
                    onSubmit={this.onSubmit}>
                    <FormField
                        value={this.state.value}
                        className="form_field"
                        placeholder="Type your new task"
                        onChange={this.onChange}
                    />
                    <Button className={this.submitButtonClassName()}
                            type="submit"
                            disabled={!this.state.submitAllowed}
                            iconClassName={"button-add"}
                            value="Добавить"/>
                </form>
                {this.renderList(this.state.itemList)}
            </React.Fragment>
        );
    };
};

const mapStateToProps = (state) => ({ });

export default connect(mapStateToProps, null)(ToDo);