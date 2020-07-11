import React from 'react';

function Search() {
  return (
    <form>
      <div className="input-group col-md-10">
        <input className="form-control extreme-rounded-ele border-right-0 d-none d-sm-block" type="text" placeholder="Search" />
        <span className="input-group-append">
          <div className="input-group-text search-icon"><i className="fa fa-search" /></div>
        </span>
      </div>
    </form>
  );
}

export default Search;
