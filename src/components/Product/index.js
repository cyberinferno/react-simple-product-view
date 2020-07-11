import React from 'react';
import PropTypes from 'prop-types';
import QuantityInput from '../QuantityInput';
import AddToCartButton from '../AddToCartButton';

function Product(props) {
  const { data } = props;
  const { label } = data;
  return (
    <div className="card no-border-radius">
      <div className="card-body">
        <span className="product-label">{label}</span>
        <div className="row">
          <div className="col-4 col-lg-3">
            <img src="/img/tyre.png" className="img-fluid product-image" alt="tyre" />
            <img src="/img/tag.png" className="product-tag" alt="tag" />
          </div>
          <div className="col-8 col-lg-9">
            <div className="row">
              <div className="col">
                <span className="product-main-heading">Continental - Contiecocontact 5</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <img src="/img/oe_approved.png" alt="OE Approved" />
              </div>
              <div className="col-md-6 col-lg-3" style={{ fontSize: '16px' }}>
                205/55 R16 H
                <br />
                SUV
              </div>
              <div className="col-md-6 col-lg-3" style={{ fontSize: '16px' }}>
                Stock&nbsp;&nbsp;
                <i className="fa fa-check-circle green" />
                <br />
                Price ₪340
              </div>
              <div className="col-md-6 col-lg-3" style={{ fontSize: '16px' }}>
                Total
                <br />
                <span className="product-total">₪1360</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: '10px' }}>
          <div className="col-6 offset-md-0 offset-lg-2 col-md-5">
            <QuantityInput />
          </div>
          <div className="col-6 col-md-6 col-lg-5">
            <AddToCartButton />
          </div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Product;
