/*eslint-disable*/
import React, { useState } from 'react';
import { Badge, Button, ButtonGroup, Card, CardBody, CardImg, CardSubtitle, CardText, Row, TabContent, TabPane } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Trainer } from './docANDconsultantData'
import ImageCards from 'containers/ui/ImageCards';
import { Link, NavLink } from 'react-router-dom';
import Rating from 'components/common/Rating';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import CustomSelectInput from 'components/common/CustomSelectInput';
import imgs from 'Images/tulaibs.PNG';

import {
  // Badge,
  // Button,
  ModalFooter,
  // ButtonGroup,

  ModalBody,
  ModalHeader,
  Modal,
  FormGroup,
} from 'reactstrap';

const Trainers = ({ match }) => {
  const [selectedRadio, setSelectedRadio] = useState('0');
  const [activeSecondTab, setActiveSecondTab] = useState('1');
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Appoint A Doctor" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
      <Colxx xxs="12" className="mb-4">
          <AddAppointments
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Colxx>
        <Colxx>
          <div className="mb-4 text-center">
            <ButtonGroup>
              <Button
                color="success"
                outline
                onClick={() => setSelectedRadio('0')}
                active={selectedRadio === '0'}
              >
                All
              </Button>
              <Button
                color="success"
                outline
                onClick={() => setSelectedRadio('1')}
                active={selectedRadio === '1'}
              >
                Female
              </Button>
              <Button
                color="success"
                outline
                onClick={() => setSelectedRadio('2')}
                active={selectedRadio === '2'}
              >
                Male{' '}
              </Button>
            </ButtonGroup>
          </div>
          <TabContent activeTab={selectedRadio}>
            <TabPane tabId="0">
              <Row>
                {/* <Colxx sm="12" lg="12 "> */}
                {Trainer.map((item, index) => {
                  return (
                    <UserCards
                      mainTitle={item.label}
                      image={item?.imgSrc}
                      badge="Dr Fitness Recommended"
                      day={item.details}
                      fee={item.fee}
                      rating={item.star}
                      butt={() => setModalShow(true)}
                    // status={item.status}
                    />
                  );
                })}
                {/* </Colxx> */}
              </Row>
            </TabPane>
            <TabPane tabId="1">
              <Row>
                {/* <Colxx sm="12" lg="12 "> */}
                {Trainer &&
                  Trainer.filter(
                    (item) => item.sex === 'Female'
                  ).map((item, index) => {
                    return (
                      <UserCards
                        mainTitle={item.label}
                        image={item?.imgSrc}
                        badge="Dr Fitness Recommended"
                        day={item.details}
                        fee={item.fee}
                        rating={item.star}
                        butt={() => setModalShow(true)}
                      // status={item.status}
                      />
                    );
                  })}
                {/* </Colxx> */}
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                {/* <Colxx sm="12" lg="12"> */}
                {Trainer &&
                  Trainer.filter(
                    (item) => item.sex === 'Male'
                  ).map((item, index) => {
                    return (
                      <UserCards
                        mainTitle={item.label}
                        image={item?.imgSrc}
                        badge="Dr Fitness Recommended"
                        day={item.details}
                        fee={item.fee}
                        rating={item.star}
                        butt={() => setModalShow(true)}
                      // status={item.status}
                      />
                    );
                  })}{' '}
                {/* </Colxx> */}
              </Row>
            </TabPane>
          </TabContent>
          {/* {Trainer.map((item) => {
            return (

              <UserCards  mainTitle={item.label} image={item?.imgSrc} badge='Dr Fitness Recommended' 
                details ={item.details} fee ={item.fee} rating={item.star} />
            );
          })} */}
        </Colxx>
      </Row>
    </>
  );
};

export default Trainers;

const UserCards = (props) => {
  return (
    <>
      <Colxx lg="4" md="6" sm="12" className="mb-4">

        <Card className="mb-4">
          <CardBody>
            <div className="text-center">
              <Badge
                color="success"
                pill
                className="position-absolute badge-top-left-2"
              >
                Fee: {props.fee} Rs
              </Badge>

              <CardImg
                top
                src={props.image}
                alt="Card image cap"
                className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"
              />
              <Link>
                <CardSubtitle className="mb-1">{props.mainTitle}</CardSubtitle>
                <RatingExamples star={props.rating} />
              </Link>
              <CardText className="text-muted text-small mb-4">
                {props.details}
              </CardText>
              <Button outline size="sm" color="primary" onClick={props.butt}>
                Book Appointment
              </Button>
            </div>
          </CardBody>
        </Card>
      </Colxx>

    </>
  )
}


const RatingExamples = (props) => {
  return (
    <Row className='justify-content-center'>
      <Colxx xxs="12" sm="6">
        <Rating total={5} rating={props.star} interactive={false} />
      </Colxx>
    </Row>
  );
};
const AddAppointments = (props) => {
  const [singleSelections, setSingleSelections] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState('0');
  const [doctor, setDoctor] = useState([]);
  const [slot, setSlot] = useState([]);

  const answerTypes = [
    { label: '8$ (Weekly)', value: '1', id: 1 },
    { label: '500$ (Yearly)', value: '2', id: 2 },
    { label: '50$ (Monthly)', value: '3', id: 3 },
  ];
  const answerTypes1 = [
    { label: 'Weekday Morning', value: '1', id: 1 },
    { label: 'Weekday Afternoon', value: '2', id: 2 },
    { label: 'Weekday Evening', value: '3', id: 3 },
    { label: 'Weekend Morning', value: '4', id: 4 },
    { label: 'Weekend Afternoon (until 6pm)', value: '5', id: 5 },
  ];

  const changeHanler = (selected) => {
    if (selected.length > 0) {
      const apiData = {
        id: selected[0]?.department_id,
      };
      //firebase
      // dispatch(getDoctorByDepartment(apiData));
    }
  };
  const changeDoctorHanler = (selected) => {
    if (selected.length > 0) {
      let today = new Date();
      let time = today.getHours() + ':' + today.getMinutes();
      const apiData = {
        id: selected[0]?.id,
        date: date,
        time: time,
      };

      // dispatch(getSlotByDateAndDoctor(apiData));
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // const condition = staticData?.appointment_patient_condition?.filter(
    //   (item) => item.name === data.condition
    // );
    // const consultation = staticData?.appointment_consultation_type?.filter(
    //   (item) => item.name === data.consultation
    // );
    const apiData = {
      // city: data.city,
      // condition: condition[0] || [],
      // consultation_type: consultation[0] || [],
      date: date,
      // slot_id: slot[0]?.slot_id,
      description: data.description,
      slot: slot,
      // doctor_id: doctor[0]?.id,
      // patient_id: user?.id,
    };
    console.log('sub->', apiData);
    // dispatch(addAppointment(apiData, { id: user?.id }));
    // props.onHide();
    // reset();
  };

  const date = watch('date', props.date);
  // disable past dates
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 0).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={props.show}
        style={{ boxShadow: 'none' }}
      >
        <TabContent activeTab={selectedRadio}>
          <TabPane tabId="0">
            <ModalHeader closeButton>
              Get In Touch
              <Button
                onClick={props.onHide}
                outline
                style={{ marginLeft: '40px', color: 'red', borderColor: 'red' }}
              >
                Close
              </Button>
            </ModalHeader>
            <ModalBody>
              <div className="row px-3">
                <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                  <div
                    className="row"
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    
                    <div className="col-lg-12">
                      <span className="label-name-login">Fitness Package</span>
                      <FormGroup>
                        <Select 
                          components={{ CustomSelectInput }}
                          className="react-select"
                          classNamePrefix="react-select"
                          name="form-field-name"
                          isSearchable={false}
                          options={answerTypes}
                          // value={state.category}
                          onChange={(t) => setSlot(t)}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-lg-12">
                      <span className="label-name-login">Preferred Time to meet?</span>
                      <FormGroup>
                        <Select 
                          components={{ CustomSelectInput }}
                          className="react-select"
                          classNamePrefix="react-select"
                          name="form-field-name"
                          isSearchable={false}
                          options={answerTypes1}
                          // value={state.category}
                          onChange={(t) => setSlot(t)}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-lg-12">
                      <span className="label-name-login">Describe your Fitness Goal</span>
                      <textarea
                        className="input-login-modal"
                        style={{ minHeight: '100px' }}
                        type="text"
                        {...register('description', {
                          required: {
                            value: false,
                            message: 'this field is required field',
                          },
                        })}
                      />
                      {errors?.description?.message ? (
                        <div className="text-error">
                          {errors?.description?.message}
                        </div>
                      ) : (
                        ''
                      )}
                    </div>{' '}
                  </div>
                  <Button
                    variant="success"
                    outline
                    type="submit"
                    onClick={() => {
                      setSelectedRadio('1');
                    }}
                    // value="Add Appointment"
                    className=" btn-block mx-auto"
                    // style={{ width: '85%', textAlign: 'center' }}
                  >
                    Proceeed To Pay
                  </Button>
                </form>
              </div>
            </ModalBody>
          </TabPane>
          <TabPane tabId="1">
            <ModalHeader closeButton>
              Payment Info
              <Button
                onClick={() => {
                  setSelectedRadio('0');
                }}
                outline
                style={{ marginLeft: '40px', color: 'red', borderColor: 'red' }}
              >
                Back
              </Button>
            </ModalHeader>
            <ModalBody>
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
                                  <input
                                    className="form-control"
                                    type="email"
                                  />
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
                                    <label for="expiry_month">
                                      Expiry Month
                                    </label>
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
                              <Button
                                // type="submit"
                                // className="btn btn-primary submit-btn"
                                onClick={() => {
                                  setSelectedRadio('2');
                                }}
                              >
                                Confirm and Pay
                              </Button>
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
                          <br />
                          <div className="booking-info">
                            <h4>
                              <a href="/template/patient/doctor-profile">
                                Adam
                              </a>
                            </h4>
                            <div className="rating">
                              <Rating
                                total={4}
                                rating={3}
                                interactive={false}
                              />
                            </div>
                            <div className="clinic-details">
                              <p className="doc-location">
                                <i className="fas fa-map-marker-alt"></i>{' '}
                                Newyork, USA
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="booking-summary">
                          <div className="booking-item-wrap">
                            <ul
                              style={{
                                padding: 0,
                                listStyle: 'none',
                                margin: 0,
                              }}
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
                                  style={{
                                    color: 'lightgray',
                                    fontSize: '16px',
                                  }}
                                >
                                  10:00 AM
                                </span>
                              </li>
                            </ul>
                            <ul
                              style={{
                                padding: 0,
                                listStyle: 'none',
                                margin: 0,
                              }}
                            >
                              <li>
                                Consulting Fee{' '}
                                <span
                                  style={{
                                    color: 'lightgray',
                                    fontSize: '16px',
                                  }}
                                >
                                  $100
                                </span>
                              </li>
                              <li>
                                Booking Fee{' '}
                                <span
                                  style={{
                                    color: 'lightgray',
                                    fontSize: '16px',
                                  }}
                                >
                                  $10
                                </span>
                              </li>
                              <li>
                                Video Call{' '}
                                <span
                                  style={{
                                    color: 'lightgray',
                                    fontSize: '16px',
                                  }}
                                >
                                  $50
                                </span>
                              </li>
                            </ul>
                            <div
                              style={{
                                padding: 0,
                                listStyle: 'none',
                                margin: 0,
                              }}
                            >
                              <ul
                                style={{
                                  padding: 0,
                                  listStyle: 'none',
                                  margin: 0,
                                }}
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
            </ModalBody>
          </TabPane>
          <TabPane tabId="2">
            <ModalHeader>
              <h3>Appointment booked Successfully!</h3>
              <Button
                onClick={props.onHide}
                outline
                style={{ marginLeft: '40px', color: 'red', borderColor: 'red' }}
              >
                Close
              </Button>
            </ModalHeader>
            <ModalBody>
              <div class="success-cont">
                <i class="fas fa-check"></i>
                <p>
                  Appointment booked with <strong>Dr. Darren Elder</strong>
                  <br /> on <strong>12 Nov 2019 5:00PM to 6:00PM</strong>
                </p>
                <a
                  class="btn btn-primary view-inv-btn"
                  href="/app/videoChat/Invoices"
                >
                  View Invoice
                </a>
              </div>
            </ModalBody>
          </TabPane>
        </TabContent>
      </Modal>
    </>
  );
};

