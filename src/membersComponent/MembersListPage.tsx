import React from "react";
import { MDBDataTable } from "mdbreact";
import dummy from "./dummy";
import SearchNavigation from "./SearchNavigation";

const MemberListPage = () => {
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
    <div className="bg-dark" id="login-page">
      <SearchNavigation />
      <section className="vh-100">
        <div className="card">
          <div className="card-header" />
          <div className="card-body">
            <MDBDataTable striped bordered small data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberListPage;
