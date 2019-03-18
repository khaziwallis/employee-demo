import React, { Component } from 'react';

import IUser from '../types/IUser';
import { createEmployee } from '../services/employee';

interface IProps extends IUser {
};

interface IState {
    name: any,
    age: any,
    designation: any
};

class CreateEmployee extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
        this.state = {
            'name': '',
            'age': '',
            'designation': ''
        }
    }
    submitForm(event: any) {
        if (this.state.name && this.state.designation && this.state.age) {
            let data = {
                name: this.state.name,
                age: this.state.age,
                designation: this.state.designation
            };
            createEmployee(data).then(() => {
                alert('Employee succesfully created...');
                this.resetForm();
            })
            .catch((e)=> {
                alert('Error creating Employee...');
            });
        } else {
            alert('Please fill all fields.');
        }
    }
    resetForm() {
        this.setState({
            'name': '',
            'age': '',
            'designation': ''
        })
    }
    updateFields(event:any) {
        let fieldName:any = event.target.id;
        let fieldValue:any = event.target.value;
        if (fieldName === 'name') { 
            this.setState({
                'name': fieldValue
            })
        } else if (fieldName === 'age') {
            this.setState({
                'age': fieldValue
            })
        } else {
            this.setState({
                'designation': fieldValue
            })
        }
        
    }
    render() {
        return (
        <div className="App">
            Hello Mr, { this.props.user.name }, am to create new employee record....
            <form>
                <label>
                    Name:
                    <input type="text" id="name" value={this.state.name} onChange={this.updateFields.bind(this)}/>
                </label>
                <label>
                    Age:
                    <input type="text" id="age" value={this.state.age} onChange={this.updateFields.bind(this)}/>
                </label>
                <label>
                    Designation:
                    <input type="text" id="designation" value={this.state.designation} onChange={this.updateFields.bind(this)}/>
                </label>
                <div>
                    <input type="button" onClick={this.submitForm.bind(this)} value="Submit"/>
                    <input type="button" onClick={this.resetForm.bind(this)} value="Reset" />
                </div>
            </form>
        </div>
        );
    }
}

export default CreateEmployee;
