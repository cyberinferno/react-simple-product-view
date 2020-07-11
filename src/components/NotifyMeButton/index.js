import React from 'react';
import PropTypes from 'prop-types';

function NotifyMeButton(props) {
  const { lite } = props;
  return (
    <button type="button" className="btn btn-notify-me">
      <i className="fa fa-bell fa-2x" />
      <span className={lite ? 'd-none d-xl-inline responsive-btn-label' : 'd-none d-sm-inline responsive-btn-label'}>&nbsp;Notify Me!</span>
    </button>
  );
}

NotifyMeButton.defaultProps = {
  lite: false,
};

NotifyMeButton.propTypes = {
  lite: PropTypes.bool,
};

export default NotifyMeButton;
