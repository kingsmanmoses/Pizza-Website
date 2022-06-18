import React from 'react';
import './product.css';

const Products = ({ heading, data }) => {
  return (
    <>
      <div className="procont">
        <h1 className="prohead">{heading}</h1>
        <div className="prowrap">
          {data.map((product, index) => {
            return (
              <div key={index} className="procard">
                <img className="proimg" src={product.img} alt={product.alt} />
                <div className="proinfo">
                  <h1 className="protitle">{product.name}</h1>
                  <p className="prodesc">{product.desc}</p>
                  <p className="proprice">{product.price}</p>
                  <button className="probtn">{product.button}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
