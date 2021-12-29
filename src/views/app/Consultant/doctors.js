/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import {
  Badge,
  Button,
  ModalFooter,
  ButtonGroup,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  ModalBody,
  ModalHeader,
  Row,
  TabContent,
  TabPane,
  Modal,
  FormGroup,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { LabConsultantsData } from './docANDconsultantData';
import ImageCards from 'containers/ui/ImageCards';
import { Link, NavLink } from 'react-router-dom';
import Rating from 'components/common/Rating';
import { useForm } from 'react-hook-form';
import './Consultant.css';
import CustomSelectInput from 'components/common/CustomSelectInput';
import Select from 'react-select';
import data from 'data/notifications';

const Doctors = ({ match }) => {
  const [selectedRadio, setSelectedRadio] = useState('0');
  const [activeSecondTab, setActiveSecondTab] = useState('1');

  const [modalShow, setModalShow] = useState(true);

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
              <Row className="flex-direction-row">
                {/* <Colxx sm="12" lg="12"> */}
                {LabConsultantsData.map((item, index) => {
                  return (
                    <UserCards
                      mainTitle={item.label}
                      image={item?.imgSrc}
                      badge="Dr Fitness Recommended"
                      day={item.details}
                      fee={item.fee}
                      rating={item.star}
                      // status={item.status}
                    />
                  );
                })}
                {/* </Colxx> */}
              </Row>
            </TabPane>
            <TabPane tabId="1">
              <Row>
                {/* <Colxx sm="12" lg="12"> */}
                {LabConsultantsData &&
                  LabConsultantsData.filter(
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
                {LabConsultantsData &&
                  LabConsultantsData.filter((item) => item.sex === 'Male').map(
                    (item, index) => {
                      return (
                        <UserCards
                          mainTitle={item.label}
                          image={item?.imgSrc}
                          badge="Dr Fitness Recommended"
                          day={item.details}
                          fee={item.fee}
                          rating={item.star}
                          // status={item.status}
                        />
                      );
                    }
                  )}{' '}
                {/* </Colxx> */}
              </Row>
            </TabPane>
          </TabContent>
          {/* {LabConsultantsData.map((item) => {
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

export default Doctors;

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
              <Button outline size="sm" color="primary">
                Book Appointment
              </Button>
            </div>
          </CardBody>
        </Card>
      </Colxx>
    </>
  );
};

const RatingExamples = (props) => {
  return (
    <Row className="justify-content-center">
      <Colxx xxs="12" sm="6">
        <Rating total={5} rating={props.star} interactive={false} />
      </Colxx>
    </Row>
  );
};

// import React, { useEffect, useState } from "react";

const AddAppointments = (props) => {
  const [singleSelections, setSingleSelections] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [slot, setSlot] = useState([]);

  const answerTypes = [
    { label: 'Text Area', value: '1', id: 1 },
    { label: 'Checkbox', value: '2', id: 2 },
    { label: 'Radiobutton', value: '3', id: 3 },
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
        slot:slot,
        // doctor_id: doctor[0]?.id,
        // patient_id: user?.id,
      };
      console.log('sub->',apiData)
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
        <ModalHeader closeButton>Add Appointment</ModalHeader>
        <ModalBody>
          <div className="row px-3">
            <form onSubmit={handleSubmit(onSubmit)} className="w-100">
              <div
                className="row"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <div className="col-lg-6">
                  <span className="label-name-login">Date</span>
                  <input
                    className="input-login-modal"
                    type="date"
                    min={disablePastDate()}
                    onChange={() => changeDoctorHanler(doctor)}
                    {...register('date', {
                      required: {
                        value: true,
                        message: 'this field is required field',
                      },
                    })}
                  />
                  {errors?.date?.message ? (
                    <div className="text-error">{errors?.date?.message}</div>
                  ) : (
                    ''
                  )}
                </div>
                <div className="col-lg-12">
                  <span className="label-name-login">Slots</span>
                  <FormGroup>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      options={answerTypes}
                      // value={state.category}
                      onChange={(t) => setSlot(t)}
                      />
                  </FormGroup>
                </div>
                <div className="col-lg-12">
                  <span className="label-name-login">Reason</span>
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
                // value="Add Appointment"
                className=" btn-block mx-auto"
                // style={{ width: '85%', textAlign: 'center' }}
              >
                Add Appointment
              </Button>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

// export default AddAppointments;
