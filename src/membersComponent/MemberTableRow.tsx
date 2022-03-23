import React from "react";
import { Member } from "./Member";

type MemberTableRowProps = {
  member: Member;
};

const MemberTableRow = (props: MemberTableRowProps) => {

  const imgStyle = {
    width: "45px",
    height: "45px",
  };

  return (
    <tr key={props.member.id}>
      <td>
        <div className="d-flex align-items-center">
          <img src={props.member.photo} className="rounded-circle" alt="" style={imgStyle} />
          <div className="ms-3">
            <p className="fw-bold mb-1">{props.member.name}</p>
            <p className="text-muted mb-0">{props.member.email}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">{props.member.role}</p>
        <p className="text-muted mb-0">Finance</p>
      </td>
      <td>
        <span className="badge badge-primary rounded-pill d-inline bg-secondary">
          {props.member.status}
        </span>
      </td>
      <td>Junior</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default MemberTableRow;
