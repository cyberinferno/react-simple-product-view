import React from 'react';
import PropTypes from 'prop-types';

function AddToCartButton(props) {
  const { lite } = props;
  return (
    <button type="button" className="btn btn-add-to-cart">
      <i className="fa fa-cart-plus fa-2x" />
      <span className={lite ? 'd-none d-xl-inline responsive-btn-label lite-weight' : 'd-none d-sm-inline responsive-btn-label'}>&nbsp;Add To Cart</span>
    </button>
  );
}

AddToCartButton.defaultProps = {
  lite: false,
};

AddToCartButton.propTypes = {
  lite: PropTypes.bool,
};

export default AddToCartButton;
