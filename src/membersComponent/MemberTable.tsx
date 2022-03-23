import React, { ChangeEvent, useState } from "react";
import SearchBar from "./SearchBar";
import MemberTableRow from "./MemberTableRow";
import Fuse from "fuse.js";
import memberTableData from "./memberTableData";
import { Member } from "./Member";
import "./Styles.MemberTable.css";

const MemberTable = () => {
  const [searchMatch, setSearchMatch] = useState(memberTableData);
  const data = searchMatch.length === 0 ? memberTableData : searchMatch;

  const fuse = new Fuse(memberTableData, {
    keys: ["name", "position", "status", "email", "role"],
  });

  function searchMember(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      setSearchMatch(memberTableData);
    }
    const result = fuse.search(event.target.value);
    if (result.length === 0) {
      setSearchMatch([]);
    } else {
      let matches: any = [];
      result.forEach((item) => {
        let member = new Member({
          id: item.item.id,
          name: item.item.name,
          email: item.item.email,
          position: item.item.position,
          status: item.item.status,
          date_joined: item.item.date_joined,
          role: item.item.role,
          photo: item.item.photo,
        });
        matches.push(member);
      });
      setSearchMatch(matches);
    }
  }

  return (
    <div className="table-responsive">
      <SearchBar searchMember={searchMember} />
      <table className="table table-hover table-bordered align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Status</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => {
            return <MemberTableRow key={member.id} member={member} />;
          })}
        </tbody>
      </table>
      <nav aria-label="Page navigation example" className="nav-pagination table-responsive">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">...</a></li>
          <li className="page-item"><a className="page-link" href="#">11</a></li>
          <li className="page-item"><a className="page-link" href="#">12</a></li>
          <li className="page-item"><a className="page-link" href="#">13</a></li>
          <li className="page-item"><a className="page-link" href="#">...</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MemberTable;
