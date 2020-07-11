import React from 'react';
import PropTypes from 'prop-types';

function NavLink(props) {
  const { icon, text } = props;
  return (
    <div className="col text-center pointer gray">
      <i className={`fa fa-${icon} fa-2x`} />
      <span className="d-none d-sm-block">{text}</span>
    </div>
  );
}

NavLink.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLink;
