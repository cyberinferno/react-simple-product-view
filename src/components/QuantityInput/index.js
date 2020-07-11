import React from 'react';

function QuantityInput() {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary btn-quantity-change no-border-radius" type="button">
          -
        </button>
      </div>
      <input type="text" className="form-control" value="4" disabled style={{ maxWidth: '54px', fontWeight: 'bold' }} />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary btn-quantity-change no-border-radius" type="button">
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityInput;
