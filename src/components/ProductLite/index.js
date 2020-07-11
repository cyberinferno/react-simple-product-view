/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import QuantityInput from '../QuantityInput';
import AddToCartButton from '../AddToCartButton';
import NotifyMeButton from '../NotifyMeButton';

function ProductLite(props) {
  const { data } = props;
  const { stock } = data;
  return (
    <div className="card no-border-radius">
      <div className="card-body">
        <div className="row">
          <div className="col-2 col-xl align-self-center">
            <span className="product-lite-name">Continental - Contiecocontact 5</span>
          </div>
          <div className="col-1 align-self-center">
            <img src="/img/oe_approved.png" alt="OE Approved" />
          </div>
          <div className="col align-self-center" style={{ fontSize: '16px' }}>
            205/55 R16 H
            <br />
            SUV
          </div>
          <div className="col align-self-center">
            <span style={{ fontSize: '16px' }}>
              Stock&nbsp;&nbsp;
              { stock === 0 ? <i className="fa fa-times-circle red" /> : stock < 11 ? <i className="fa fa-exclamation-circle text-warning" /> : <i className="fa fa-check-circle green" /> }
              { stock < 11 ? <br /> : '' }
              { stock === 0 ? <span className="red" style={{ fontSize: '14px', fontWeight: 'bold' }}>Back in 1 week!</span> : '' }
              { stock < 11 && stock !== 0 ? <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{`${stock} Tires left`}</span> : '' }
            </span>
          </div>
          <div className="col align-self-center" style={{ fontSize: '16px' }}>Price ₪340</div>
          <div className="col-2 col-xl align-self-center">
            <QuantityInput />
          </div>
          <div className="col-2 col-xl align-self-center">
            Total&nbsp;
            <span className="product-total">₪1360</span>
          </div>
          <div className="col col-xl align-self-center">{ stock === 0 ? <NotifyMeButton lite /> : <AddToCartButton lite /> }</div>
        </div>
      </div>
    </div>
  );
}

ProductLite.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default ProductLite;
