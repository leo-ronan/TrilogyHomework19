import React from "react";

const GenerateEmployee = (props) => {
    function generateEmail(props) {
        const name = props.employee_name.split(" ");
        const email = `${name[0]}.${name[1]}@gmail.com`;
        return email;
    }

    function numGen(min, max, length) {
        min = Math.ceil(min);
        max = Math.ceil(max);
        let num = Math.floor(Math.random() * (max - min) + min);
        let numLength = String(num).length;
        if (Number(numLength) < length) {
            let missingValues = length - (Number(numLength));
            for (let i = 0; i < missingValues; i++) {
                let tempNum = String(num);
                let filler = Math.floor(Math.random() * (10 - 0))
                num = tempNum + filler;
            }
        }
        return num;
    }

    function generatePhoneNum() {
            var areaCode = numGen(100, 999, 3);
            var three = numGen(0, 999, 3);
            var four = numGen(0, 9999, 4);
            var phoneNum = `${areaCode}-${three}-${four}`;
            return phoneNum;
    }

    return (
        <div className="row item-row col-md-12 employee-row">
            <div className="col-md-1">{props.id}</div>
            <div className="col-md-2">{props.employee_name}</div>
            <div className="col-md-5">{generateEmail(props)}</div>
            <div className="col-md-2">{generatePhoneNum()}</div>
            <div className="col-md-2">{props.employee_age}</div>
        </div>
    );
};
export default GenerateEmployee;