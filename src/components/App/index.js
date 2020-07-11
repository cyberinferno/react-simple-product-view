import React from 'react';
import './App.css';
import Header from '../Header';
import Product from '../Product';
import ProductLite from '../ProductLite';
import ProductSmall from '../ProductSmall';

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row" style={{ marginTop: '20px', marginBottom: '20px' }}>
          <div className="col">
            <span className="recommended-heading">Recommended Products</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-none d-sm-block" style={{ fontSize: '16px' }}>
            Selected Filters:&nbsp;
            <span className="custom-badge pointer">
              Continental&nbsp;
              <i className="fa fa-times-circle" />
            </span>
          </div>
          <div className="col-6 d-none d-sm-block" style={{ fontSize: '16px' }}>
            <div className="row justify-content-end">
              <div className="col-7 col-lg-5 col-xl-4">
                Sort by:&nbsp;
                <span className="custom-badge pointer">
                  Popularity&nbsp;
                  <i className="fa fa-angle-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row d-none d-sm-flex" style={{ marginTop: '25px' }}>
          <div className="col-6">
            <Product data={{ label: 'Premium Bestseller' }} />
          </div>
          <div className="col-6">
            <Product data={{ label: 'Economy Bestseller' }} />
          </div>
        </div>
        <div className="d-block d-sm-none small-card-container" style={{ marginTop: '25px' }}>
          <div className="row text-center flex-nowrap">
            <div className="col-12">
              <Product data={{ label: 'Premium Bestseller' }} />
            </div>
            <div className="col-12">
              <Product data={{ label: 'Economy Bestseller' }} />
            </div>
          </div>
        </div>
        <div className="row d-none d-lg-flex">
          <div className="col-12 col-md-6 col-lg-12" style={{ marginTop: '20px' }}>
            <ProductLite data={{ stock: 11 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-12" style={{ marginTop: '20px' }}>
            <ProductLite data={{ stock: 8 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-12" style={{ marginTop: '20px' }}>
            <ProductLite data={{ stock: 0 }} />
          </div>
        </div>
        <div className="row d-lg-none d-flex">
          <div className="col-sm-12 col-md-6" style={{ marginTop: '20px' }}>
            <ProductSmall data={{ stock: 11 }} />
          </div>
          <div className="col-sm-12 col-md-6" style={{ marginTop: '20px' }}>
            <ProductSmall data={{ stock: 8 }} />
          </div>
          <div className="col-sm-12 col-md-6" style={{ marginTop: '20px' }}>
            <ProductSmall data={{ stock: 0 }} />
          </div>
          <div className="col-sm-12 col-md-6" style={{ marginTop: '20px' }}>
            <ProductSmall data={{ stock: 10 }} />
          </div>
        </div>
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col align-self-center">
            <button type="button" className="btn btn-load-more">Load More Results</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
