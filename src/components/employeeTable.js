import React from "react";
import GenerateEmployee from "./generateEmployee";

const EmployeeTable = (props) => {
    console.log("EmployeeTable fired");
    return (
        <div className="container">
            <div className="row">
                <h3 className="employee-count">There are {props.employees.length} employees</h3>
            </div>
            <div className="row list-headers">
                <div className="col-md-1">ID #</div>
                <div className="col-md-2">Full Name</div>
                <div className="col-md-5">Email Address</div>
                <div className="col-md-2">Phone Number</div>
                <div className="col-md-2">Age</div>
                <div className="employee-info-row col-sm-12">
                    {props.employees.map((employee) => (
                        <GenerateEmployee {...employee} key={employee.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmployeeTable;