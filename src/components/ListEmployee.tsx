import React, { Component } from 'react';

import IUser from '../types/IUser';
import { getEmployees } from '../services/employee';


interface IProps extends IUser {
};

interface IState {
    'employees': any;
};

class ListEmployee extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
        this.state = {
            'employees': []
        }
    }
    componentWillMount () {
        getEmployees().then((response) => {
            this.setState({
                'employees': response.data.doc
            });
        });
    }
    componentWillReceiveProps (props: IProps) {
        getEmployees().then((response) => {
            this.setState({
                'employees': response.data.doc
            });
        });
    }
    render() {
        let tableRowsJSX = this.state.employees.map((emp: any) => {
            return (
                <tr key={emp.name}>
                    <td> {emp.name} </td>
                    <td> {emp.age} </td>
                    <td> {emp.designation}</td>
                </tr>
            );
        });
        return (
            <div className="App">   
                <table>
                    <tr>
                        <th>
                            name
                        </th>
                        <th>
                            age
                        </th>
                        <tr>
                            Designation
                        </tr>
                    </tr>
                    {tableRowsJSX}
                </table>
            </div>
        );
    }
}

export default ListEmployee;
