import React, { Component } from "react";
import EmployeeTable from "./employeeTable";
import axios from "axios";

class Home extends Component {
    state = {
        employees: [],
        employeesDisplayed: [],
        filter: ""
    };

    componentDidMount() {
        this.apiCall();
    };

    resetFilter = () => {
        this.setState({
            employeesDisplayed: this.state.employees,
            filter: ""
        });
    };

    apiCall = () => {
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then((res) => {
            console.log(res);
            this.setState({
                employees: res.data.data,
                employeesDisplayed: res.data.data
            });
        })
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        console.log("handle change fired: " + String(name) + " " + String(value));
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        console.log("handle submit fired");
        event.preventDefault();
        const employees = [...this.state.employees];
        console.log("employees: " + employees);

        const filterResult = employees.filter((employee) => {
            console.log("THIS.STATE.FILTER: " + String(this.state.filter));
            const term = new RegExp(this.state.filter, "gi");
            console.log(term);
            return employee.employee_name.match(term);
        });
        
        this.setState({ employeesDisplayed: filterResult });
    };


    render() {
        return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-10">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search employees by first or last name"
                                            name="filter"
                                            value={this.state.filter}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit}>
                                    Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                        {this.state.employees.length !== this.state.employeesDisplayed.length && (
                        <button className="btn btn-secondary" onClick={this.resetFilter}>Reset Filter{" "}</button>
                        )}
                    </div>
                </div>
            </div>
            <EmployeeTable employees={this.state.employeesDisplayed} />
        </>
        );
      }
    }
    export default Home;