import React from "react";
import SearchNavigation from "./SearchNavigation";
import "./Styles.MembersListPage.css";
import MemberTable from "./MemberTable";

const MemberListPage = () => {
  return (
    <div className="bg-dark flex-md-wrap" id="login-page">
      <SearchNavigation />
      <section className="vh-100">
        <div className="Container table-responsive bg-light">
          <div className="card-header" />
          <div className="card-body">
            <MemberTable />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberListPage;
