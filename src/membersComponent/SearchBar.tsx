import React, { ChangeEvent } from "react";
import "./Styles.SearchBar.css";

type SearchBarProps = {
  searchMember: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = (props: SearchBarProps) => {

  return (
    <div className="SearchSpan input-group">
      <input
        type="search"
        className="form-control"
        placeholder="Search Member Name"
        onChange={props.searchMember}
      />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;