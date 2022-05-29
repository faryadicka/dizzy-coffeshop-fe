import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Navbars from "../../components/Navbars/Navbars";

// Assets
import "../Payment/Payment.scoped.css";
import ImagePayment from "../../assets/img/image-payment.png";
import CardCart from "../../components/CardCart/CardCart";

export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbars />
        <main className="main-payment">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between">
              <div className="col-auto col-md-4">
                <p className="text-white header-payment">
                  Checkout your item now!
                </p>
              </div>
            </div>
            <div className="row justify-content-around mt-md-5 gap-5">
              <div className="col-8 col-md-6">
                <div className="card rounded-4 px-3 h-100">
                  <div className="card-body">
                    <h4 className="header-payment-card card-title text-center">
                      Old Summary
                    </h4>
                    <CardCart
                      image={ImagePayment}
                      name="Hazelnut Latte"
                      qty="1"
                      price="ID 24.0"
                    />
                    <CardCart
                      image={ImagePayment}
                      name="Hazelnut Latte"
                      qty="1"
                      price="ID 24.0"
                    />
                    <div className="d-flex justify-content-between border-top border-dark pt-4">
                      <p className="subtotal">SUBTOTAL</p>
                      <p className="price">IDR 120.000</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="tax-fees">TAX & FEES</p>
                      <p className="price">IDR 120.000</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="shipping">SHIPPING</p>
                      <p className="price">IDR 120.000</p>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                      <h5 className="total fw-bold">TOTAL</h5>
                      <h5 className="price fw-bold">IDR 120.000</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="d-flex justify-content-between">
                    <p className="adress-payment text-white">Adress details</p>
                    <p className="edit-adress text-white fw-bold pt-3">edit</p>
                  </div>
                  <div className="card p-4 rounded-4">
                    <input
                      type="text"
                      className="address-payment p-2 "
                      placeholder="Input your Street"
                    />
                    <input
                      type="text"
                      className="address-payment p-2"
                      placeholder="Input your detail street"
                    />
                    <input
                      type="number"
                      className="phone-payment p-2"
                      placeholder="Input your phone number"
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-4">
                    <p className="adress-payment text-white">Payment Methods</p>
                  </div>
                  <div className="card p-4 rounded-5">
                    <div className="form-check p-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Card
                      </label>
                    </div>
                    <div className="form-check form-check-mid p-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                        Bank Account
                      </label>
                    </div>
                    <div className="form-check p-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                        Cash on delivery
                      </label>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-5 col-md-12">
                      <button className="w-100 btn btn-choco mt-4 py-4 rounded-4">
                        Confirm and Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Payment;
