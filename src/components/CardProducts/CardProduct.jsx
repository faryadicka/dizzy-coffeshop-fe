import React from "react";

// assets
import "../CardProducts/CardProduct.scoped.css";

export default function CardProduct(props) {
  return (
    <div className="col-6 col-md-3 col-lg-3 ms-5 ms-md-0">
      <div className="card card-products border-0 align-items-center text-center mb-md-5 mb-5">
        <img
          src={props.image}
          className="card-img-top rounded-circle"
          alt="product-img"
        />
        <div className="card-body">
          <h6 className="card-product-title">{props.title}</h6>
          <p className="card-price">{props.price}</p>
        </div>
      </div>
    </div>
  );
}
