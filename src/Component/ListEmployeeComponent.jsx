import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employee: []
        }
        this.entryEmployee = this.entryEmployee.bind(this);
        this.editEsaf = this.editEsaf.bind(this);
        this.deleteEsaf = this.deleteEsaf.bind(this);
        console.log("hi"+this.state.employee);
    }
    deleteEsaf(id) {
        EmployeeService.deleteEsaf(id);
        this.componentDidMount();
    }
    
    editEsaf(id) {
        this.props.history.push(`/entry-employee/${id}`)
    }
    componentDidMount() {
        EmployeeService.listEmployees().then((Response) => {
            this.setState({ employee: Response.data });
        })
    }
    entryEmployee() {
        this.props.history.push('/entry-employee/-1')
    }
    render() {
        return (
            <div>
                <h2 className="text-center">ESAF List</h2>
                <div>
                    <button className="btn btn-primary btn-sm" type="button" onClick={this.entryEmployee}>Entry esaf</button>
                </div> <br />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Employee Firstname </th>
                                <th> Employee Lastname </th>
                                <th> Employee phone No </th>
                                <th> Employee Email id </th>
                                <th> Employee DOB </th>
                                <th> Actions </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employeeList =>
                                        <tr key={employeeList.id}>
                                            <td> {employeeList.firstName} </td>
                                            <td> {employeeList.lastName} </td>
                                            <td> {employeeList.phoneNo} </td>
                                            <td> {employeeList.emailId} </td>
                                            <td> {employeeList.dob} </td>
                                            <td>
                                                <button onClick={() => this.editEsaf(employeeList.id)} className="btn btn-info">Edit</button> &nbsp;
                                                <button onClick={() => this.deleteEsaf(employeeList.id)} className="btn btn-danger">Delete</button>
                                            </td>

                                        </tr>
                                )

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListEmployeeComponent