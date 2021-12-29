/*eslint-disable*/
import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import Rating from 'components/common/Rating';
import imgs from 'Images/tulaibs.PNG';

const AngleChecker = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Angle Checker" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          {/* <div className="content"> */}
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <form action="/patient/booking-success">
                      <div className="info-widget">
                        <h4 className="card-title">Personal Information</h4>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>First Name</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>Last Name</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>Email</label>
                              <input className="form-control" type="email" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>Phone</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="exist-customer">
                          Existing Customer?
                          <a
                            href="/template/patient/checkout"
                            style={{ color: 'skyblue' }}
                          >
                            Click here to login
                          </a>
                        </div>
                      </div>
                      <div className="payment-widget">
                        <h4 className="card-title">Payment Method</h4>
                        <div className="payment-list">
                          <label className="payment-radio credit-card-option">
                            <input type="radio" name="radio" checked="" />
                            <span className="checkmark"></span>Credit card
                          </label>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group card-label">
                                <label for="card_name">Name on Card</label>
                                <input
                                  className="form-control"
                                  id="card_name"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group card-label">
                                <label for="card_number">Card Number</label>
                                <input
                                  className="form-control"
                                  id="card_number"
                                  placeholder="1234  5678  9876  5432"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group card-label">
                                <label for="expiry_month">Expiry Month</label>
                                <input
                                  className="form-control"
                                  id="expiry_month"
                                  placeholder="MM"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group card-label">
                                <label for="expiry_year">Expiry Year</label>
                                <input
                                  className="form-control"
                                  id="expiry_year"
                                  placeholder="YY"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group card-label">
                                <label for="cvv">CVV</label>
                                <input
                                  className="form-control"
                                  id="cvv"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="payment-list">
                          <label className="payment-radio paypal-option">
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>Paypal
                          </label>
                        </div>
                        <div className="terms-accept">
                          <div className="custom-checkbox">
                            <input type="checkbox" id="terms_accept" />
                            <label for="terms_accept">
                              I have read and accept{' '}
                              <a href="#0" style={{ color: 'skyblue' }}>
                                Terms Conditions
                              </a>
                            </label>
                          </div>
                        </div>
                        <div className="submit-section mt-4">
                          <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                          >
                            Confirm and Pay
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 theiaStickySidebar">
                <div className="card booking-card mb-0">
                  <div className="card-header m-2">
                    <h4 className="card-title mb-0">Booking Summary</h4>
                    <hr className="mb-0"></hr>
                  </div>
                  <div className="card-body">
                    <div style={{ display: '-webkit-box' }}>
                      <a
                        style={{ width: '80px', marginRight: 15 }}
                        href="/template/patient/doctor-profile"
                      >
                        <img src={imgs} width="80px" alt="User" />
                      </a>
                      <div className="booking-info">
                        <h4>
                          <a href="/template/patient/doctor-profile">
                            Dr. Darren Elder
                          </a>
                        </h4>
                        <div className="rating">
                          <Rating total={5} rating={3} interactive={false} />
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt"></i> Newyork,
                            USA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="booking-summary">
                      <div className="booking-item-wrap">
                        <ul
                          style={{ padding: 0, listStyle: 'none', margin: 0 }}
                        >
                          <li>
                            Date{' '}
                            <span
                              style={{
                                color: 'skyblue',
                                fontSize: '16px',
                                float: 'right',
                              }}
                            >
                              16 Nov 2019
                            </span>
                          </li>
                          <li>
                            Time{' '}
                            <span
                              style={{ color: 'lightgray', fontSize: '16px' }}
                            >
                              10:00 AM
                            </span>
                          </li>
                        </ul>
                        <ul
                          style={{ padding: 0, listStyle: 'none', margin: 0 }}
                        >
                          <li>
                            Consulting Fee{' '}
                            <span
                              style={{ color: 'lightgray', fontSize: '16px' }}
                            >
                              $100
                            </span>
                          </li>
                          <li>
                            Booking Fee{' '}
                            <span
                              style={{ color: 'lightgray', fontSize: '16px' }}
                            >
                              $10
                            </span>
                          </li>
                          <li>
                            Video Call{' '}
                            <span
                              style={{ color: 'lightgray', fontSize: '16px' }}
                            >
                              $50
                            </span>
                          </li>
                        </ul>
                        <div
                          style={{ padding: 0, listStyle: 'none', margin: 0 }}
                        >
                          <ul
                            style={{ padding: 0, listStyle: 'none', margin: 0 }}
                          >
                            <li>
                              <span>Total</span>
                              <span
                                style={{
                                  color: 'skyblue',
                                  fontSize: '16px',
                                  float: 'right',
                                }}
                              >
                                $160
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Colxx>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="booking-doc-info">
                  <a
                    class="booking-doc-img"
                    href="/template/patient/doctor-profile"
                  >
                    <img
                      src="/template/bc4e8d916b11472fc8050d8ff94e9a9a.jpg"
                      alt="User"
                    />
                  </a>
                  <div class="booking-info">
                    <h4>
                      <a href="/template/patient/doctor-profile">
                        Dr. Darren Elder
                      </a>
                    </h4>
                    <div class="rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star"></i>
                      <span class="d-inline-block average-rating">35</span>
                    </div>
                    <p class="text-muted mb-0">
                      <i class="fas fa-map-marker-alt"></i> Newyork, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-4 col-md-6">
                <h4 class="mb-1">11 November 2019</h4>
                <p class="text-muted">Monday</p>
              </div>
              <div class="col-12 col-sm-8 col-md-6 text-sm-right">
                <div class="datepicker-icon">
                  <i class="far fa-calendar-alt mr-2"></i>
                  <input
                    class="form-control col-4 input-range"
                    type="text"
                    custom="input-range"
                  />
                  <i class="fas fa-chevron-down ml-2"></i>
                </div>
              </div>
            </div>
            <div class="card booking-schedule schedule-widget">
              <div class="schedule-header">
                <div class="row">
                  <div class="col-md-12">
                    <div class="day-slot">
                      <ul>
                        <li class="left-arrow">
                          <a href="/template/patient/booking#0">
                            <i class="fa fa-chevron-left"></i>
                          </a>
                        </li>
                        <li>
                          <span>Mon</span>
                          <span class="slot-date">
                            11 Nov <small class="slot-year">2019</small>
                          </span>
                        </li>
                        <li>
                          <span>Tue</span>
                          <span class="slot-date">
                            12 Nov <small class="slot-year">2019</small>
                          </span>
                        </li>
                        <li>
                          <span>Wed</span>
                          <span class="slot-date">
                            13 Nov <small class="slot-year">2019</small>
                          </span>
                        </li>
                        <li>
                          <span>Thu</span>
                          <span class="slot-date">
                            14 Nov <small class="slot-year">2019</small>
                          </span>
                        </li>
                        <li>
                          <span>Fri</span>
                          <span class="slot-date">
                            15 Nov <small class="slot-year">2019</small>
                          </span>
                        </li>
                        <li>
                          <span>Sat</span>
                          <span class="slot-date">
                            16 Nov <small class="slot-year">2019</small>
                          </span>
                        </li>
                        <li>
                          <span>Sun</span>
                          <span class="slot-date">
                            17 Nov <small class="slot-year">2019</small>
                          </span>
                        </li>
                        <li class="right-arrow">
                          <a href="/template/patient/booking#0">
                            <i class="fa fa-chevron-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="schedule-cont">
                <div class="row">
                  <div class="col-md-12">
                    <div class="time-slot">
                      <ul class="clearfix">
                        <li>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>9:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>10:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>11:00</span> <span>AM</span>
                          </a>
                        </li>
                        <li>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>9:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>10:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>11:00</span> <span>AM</span>
                          </a>
                        </li>
                        <li>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>9:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>10:00</span>
                            <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>11:00</span> <span>AM</span>
                          </a>
                        </li>
                        <li>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>9:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>10:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>11:00</span> <span>AM</span>
                          </a>
                        </li>
                        <li>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>9:00</span> <span>AM</span>
                          </a>
                          <a
                            class="timing selected"
                            href="/template/patient/booking#0"
                          >
                            <span>10:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>11:00</span> <span>AM</span>
                          </a>
                        </li>
                        <li>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>9:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>10:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>11:00</span> <span>AM</span>
                          </a>
                        </li>
                        <li>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>9:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>10:00</span> <span>AM</span>
                          </a>
                          <a class="timing" href="/template/patient/booking#0">
                            <span>11:00</span> <span>AM</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div class="submit-section proceed-btn text-right">
              <a
                class="btn btn-primary submit-btn"
                href="/template/patient/checkout"
              >
                Proceed to Pay
              </a>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default AngleChecker;
