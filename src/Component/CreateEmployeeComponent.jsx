import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            phoneNo: '',
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
        this.entryEsaf = this.entryEsaf.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    componentDidMount() {
        if (this.state.id == -1) {
            return
        } else {
            EmployeeService.getEsaf(this.state.id).then((response) => {
                let esaf = response.data;
                console.log(esaf);
                this.setState({
                    firstName: esaf.firstName,
                    lastName: esaf.lastName,
                    emailId: esaf.emailId,
                    phoneNo: esaf.phoneNo
                });
            })
        }
    }

    cancel = (e) => {
        this.props.history.push('/')
    }

    entryEsaf = (e) => {
        e.preventDefault();
        let esaf = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, phoneNo: this.state.phoneNo }
        console.log(esaf);
        if (this.state.id == -1) {
            EmployeeService.entryEsaf(esaf).then(Response => {
                this.props.history.push('/');
            })
        } else {
            EmployeeService.updateEsaf(this.state.id, esaf).then(response => {
                this.props.history.push('/');
            })

        }
    }

    getTitle() {
        if (this.state.id == -1) {
            return <h3 className="text-center">Add Esaf</h3>
                ;
        } else {
            return <h3 className="text-center">Update Esaf</h3>
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value })
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value })
    }

    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value })
    }

    changePhoneNoHandler = (event) => {
        this.setState({ phoneNo: event.target.value })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {this.getTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input placeholder="First Name" name="fname" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input placeholder="Last Name" name="lname" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Email Id: </label>
                                    <input placeholder="Email id" name="email" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Phone No: </label>
                                    <input placeholder="Phone No" name="phonen" className="form-control"
                                        value={this.state.phoneNo} onChange={this.changePhoneNoHandler} />
                                </div> <br />
                                <button className="btn btn-success " onClick={this.entryEsaf}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )

    }
}
export default CreateEmployeeComponent