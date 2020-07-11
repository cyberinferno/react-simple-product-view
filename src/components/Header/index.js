import React from 'react';
import Search from '../Search';
import NavLink from '../NavLink';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="row" style={{ width: '100%' }}>
        <div className="col-3 col-md-3 align-self-center">
          <i className="fa fa-sliders fa-2x gray pointer" />
        </div>
        <div className="col-3 col-md-6 align-self-center">
          <Search />
        </div>
        <div className="col-6 col-md-3 align-self-center">
          <div className="row justify-content-end">
            <NavLink icon="user" text="Account" />
            <NavLink icon="file-text-o" text="Orders" />
            <NavLink icon="shopping-cart" text="Cart" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
