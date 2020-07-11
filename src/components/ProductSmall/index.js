/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import QuantityInput from '../QuantityInput';

function ProductSmall(props) {
  const { data } = props;
  const { stock } = data;
  return (
    <div className="card no-border-radius">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <span className="product-main-heading">Continental - Contiecocontact 5</span>
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td className="align-middle"><img src="/img/oe_approved.png" alt="OE Approved" style={{ width: '44px' }} /></td>
                  <td className="align-middle">
                    <span style={{ fontSize: '16px' }}>
                      Stock&nbsp;
                      { stock === 0 ? <i className="fa fa-times-circle red" /> : stock < 11 ? <i className="fa fa-exclamation-circle text-warning" /> : <i className="fa fa-check-circle green" /> }
                      { stock < 11 ? <br /> : '' }
                      { stock === 0 ? <span className="red" style={{ fontSize: '14px', fontWeight: 'bold' }}>Back in 1 week!</span> : '' }
                      { stock < 11 && stock !== 0 ? <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{`${stock} Tires left`}</span> : '' }
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <span style={{ fontSize: '16px' }}>
              205/55 R16 H
              <br />
              SUV
            </span>
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td className="align-middle">Price ₪340</td>
                  <td className="align-middle">
                    <span style={{ fontSize: '16px' }}>
                      Total&nbsp;
                      <span className="product-total">₪1360</span>
                      <br />
                      <span className="text-danger">Save ₪408!</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <QuantityInput />
          </div>
          <div className="col-6">
            { stock === 0 ? (
              <button type="button" className="btn btn-notify-me" style={{ fontSize: '12px' }}>
                <i className="fa fa-bell fa-2x" />
                <span className="responsive-btn-label">&nbsp;Notify Me!</span>
              </button>
            ) : (
              <button type="button" className="btn btn-add-to-cart" style={{ fontSize: '12px' }}>
                <i className="fa fa-cart-plus fa-2x" />
                <span className="responsive-btn-label">&nbsp;Add To Cart</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ProductSmall.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default ProductSmall;
