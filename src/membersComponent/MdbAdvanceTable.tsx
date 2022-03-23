import React from 'react';
import dummy from "./mdbTableData";
import {MDBDataTable} from "mdbreact";

const MdbAdvanceTable = () => {
    const data = {
        columns: [
            {
                label: "Name",
                field: "name",
                sort: "asc",
                width: 150,
            },
            {
                label: "Position",
                field: "position",
                sort: "asc",
                width: 270,
            },
            {
                label: "Office",
                field: "office",
                sort: "asc",
                width: 200,
            },
            {
                label: "Age",
                field: "age",
                sort: "asc",
                width: 100,
            },
            {
                label: "Member Since",
                field: "date",
                sort: "asc",
                width: 150,
            },
            {
                label: "Salary",
                field: "salary",
                sort: "asc",
                width: 100,
            },
        ],
        rows: dummy,
    };

    return (
        <div>
            <MDBDataTable striped bordered small data={data} />
        </div>
    );
};

export default MdbAdvanceTable;