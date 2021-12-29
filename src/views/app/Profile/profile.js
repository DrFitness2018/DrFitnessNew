// /*eslint-disable */
// import React from 'react';
// import { Row } from 'reactstrap';
// import { Colxx, Separator } from 'components/common/CustomBootstrap';
// import Breadcrumb from 'containers/navs/Breadcrumb';
// import imgss from '../../../Images/lap-consul/1.JPG'

// const Profile = ({ match }) => {

//   const ProfileData = [
//     {
//       imgsrc:imgss,
//       Name:'tulaib'
//     }
//   ]

//   return (
//     <>
//       <Row>
//         <Colxx xxs="12">
//           <Breadcrumb heading="Profile" match={match} />
//           <Separator className="mb-5" />
//         </Colxx>
//       </Row>
//       <Row>
//         <Colxx xxs="12" className="mb-4">
//           <div style={{width:'200px',heiht:'200px'}}>
//           <img src={ProfileData.imgsrc} width="100%" heigth="100%"/>
//           </div>
//           <div>
//             <h2>{ProfileData.Name}</h2>
//           </div>
//         </Colxx>
//       </Row>
//     </>
//   );
// };

// export default Profile;

/* eslint-disable */
// import { NotificationManager } from 'components/common/react-notifications';
import React, { useEffect } from 'react';
import {  ButtonGroup, CardBody, Col, CustomInput, InputGroup, InputGroupAddon, Row, Table } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import Select from 'react-select';
import CustomSelectInput from 'components/common/CustomSelectInput';

import { useState } from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import { Card, CardTitle, Label, FormGroup, Button, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import logo from '../../../Images/user.jpg';
import {  Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IconCards from 'containers/ui/IconCards';
import { Colxx } from 'components/common/CustomBootstrap';
import Appoint from '../appointment/appointment';
export default function Profile({match}) {




  
  const CurrentProduct = '';


  const [act,setact] = useState(false)
  let [buttonName, setButtonName] = useState();

  const [thisView, setThisView] = useState(true);

  let [suspendloader, setsuspendloader] = useState(false);

  const editProfile = (e) => {
    e.preventDefault();
    setThisView(!thisView);
  };

  return (
    <>
    <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="My Profile" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
            <Card>
      <CardBody>
        <div style={{ marginBottom: '30px' }}></div>
        <Formik>
          <Form>
            <Row className="h-100">
              <Col lg={12} className="mb-3">
                <div className="d-flex p-3">
                  {/* <img
                  src={  
                    user?.display_picture === '' ? logo : user?.display_picture
                  }
                  alt=""
                  className="img-fluid"
                /> */}
                  <img
                    src={logo}
                    alt=""
                    width="200px"
                    height="200px"
                    style={{ objectFit: 'contain', objectFit: 'cover' , borderRadius:'50%'}}
                  />
                </div>
                     <Label>
                      Change Profile Picture
                    </Label>
                    <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser1"
                  name="customFile"
                />
              </InputGroup>
              </Col>

              {thisView ? (
                <>
                  <Col lg={4}>
                  <FormGroup className="form-group has-float-label">
                      <Label>
                        Name
                      </Label>
                      <Field className="form-control" name="name" value="Tulaib" disabled />
                    </FormGroup>
                  </Col>
                
                  <Col lg={4}>
                  <FormGroup className="form-group has-float-label">
                      <Label>
                        Email
                      </Label>
                      <Field className="form-control" name="email" value="Tullu@gmail.com" disabled />
                    </FormGroup>
                  </Col>
                  <Col lg={4}>
                  <FormGroup className="form-group has-float-label">
                      <Label>
                        Password
                      </Label>
                      <Field className="form-control" name="password" value="***" disabled />
                    </FormGroup>
                  </Col>
                  <Col lg={4}>
                  <FormGroup className="form-group has-float-label">
                      <Label>
                        Age
                      </Label>
                      <Field className="form-control" name="age" value="22" disabled />
                    </FormGroup>
                  </Col>

                  <Col lg={4}>
                  <FormGroup className="form-group has-float-label">
                      <Label>
                        Height
                      </Label>
                      <Field className="form-control" name="feet" value="5.7 ft" disabled />
                    </FormGroup>
                  </Col>

                  <Col lg={4}>
                  <FormGroup className="form-group has-float-label">
                      <Label>
                        Weight
                      </Label>
                      <Field className="form-control" name="weight" value="55.5 kg" disabled />
                    </FormGroup>
                  </Col>

                  <Col lg={4}>
                  <FormGroup className="form-group has-float-label">
                      <Label>
                        Gender
                      </Label>
                      <Field className="form-control" name="Gender" value="M" disabled />
                    </FormGroup>
                  </Col>

                  <Col lg={4}>
                  <FormGroup className="form-group has-float-label">
                      <Label>
                        BMI
                      </Label>
                      <Field className="form-control" name="bmi" value="20" disabled />
                    </FormGroup>
                  </Col>
                </>
              ) : (
                <>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="Name" />
                      </Label>

                      <Input
                        required
                        // value={product?.name}
                        className="form-control"
                        name="name"
                        // onChange={(e) =>
                        //   setProduct({ ...product, name: e.target.value })
                        // }
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <label>
                        <IntlMessages id="Select Category" />
                      </label>

                      <>
                        <Input
                          required
                          // value={product?.name}
                          className="form-control"
                          name="name"
                          // onChange={(e) =>
                          //   setProduct({ ...product, name: e.target.value })
                          // }
                        />
                      </>
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="Price" />
                      </Label>

                      <Input
                        required
                        // value={product?.price}
                        type="number"
                        className="radio-in"
                        name="phone"
                        // validate={validateEmail}
                        // onChange={(e) => setNumber()}
                        // onChange={(e) =>
                        //   setProduct({
                        //     ...product,
                        //     price: Number(e.target.value),
                        //   })
                        // }
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="Formula" />
                      </Label>

                      <Input
                        required
                        // value={product?.formula}
                        className="form-control"
                        name="formula"
                        // onChange={(e) =>
                        //   setProduct({ ...product, formula: e.target.value })
                        // }
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="Description" />
                      </Label>

                      <Input
                        type="textarea"
                        className="form-control"
                        // value={product?.description}
                        name="description"
                        // onChange={(e) =>
                        //   setProduct({
                        //     ...product,
                        //     description: e.target.value,
                        //   })
                        // }
                      />
                    </FormGroup>
                  </Col>

                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="BarCode" />
                      </Label>

                      <Input
                        required
                        className="form-control"
                        name="barcode"
                        // value={product?.barcode}
                        // onChange={(e) =>
                        //   setProduct({ ...product, barcode: e.target.value })
                        // }
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="Save info" />
                      </Label>

                      <ButtonGroup>
                        <Button
                          required
                          className="form-control"
                          name="barcode"
                          // value={product?.barcode}
                          // onChange={(e) =>
                          //   setProduct({ ...product, barcode: e.target.value })
                          // }
                        >
                          Submit
                        </Button>
                        <Button
                          style={{ backgroundColor: '#0066b3' }}
                          className="mr-3"
                          onClick={editProfile}
                        >
                          Back
                        </Button>
                      </ButtonGroup>
                    </FormGroup>
                  </Col>

                  {/* <Col lg={6}>
                    <div className="form-row">
                      <div className="form-group col-md-9">
                        <label className="">Select File :</label>
                        <input
                          type="file"
                          className="form-control"
                          name="upload_file"
                          // onChange={async (e) => {
                          //   await setFile(e.target.files);
                          // }}
                        />
                      </div>
                      <div
                        className="form-group col-md-3"
                        style={{ marginTop: '25px' }}
                      >
                        <Button
                          className={`btn-shadow btn-multiple-state ${
                            loadingFileUpload ? 'show-spinner' : ''
                          }`}
                          size="sm"
                          // onClick={uploadFile}
                          variant="outlined"
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  </Col> */}
                </>
              )}
            </Row>

            {thisView ? (
              <Button
                style={{ backgroundColor: '#0066b3' }}
                className="mr-3"
                onClick={editProfile}
              >
                Edit Profile
              </Button>
            ) : (
              ''
              // <Button style={{ backgroundColor: '#0066b3' }} onClick={editData}>
              //   {loading ? (
              //     <div className="d-flex justify-content-center">
              //       <Loader height={18} width={18} type="Oval" color="#fff" />
              //       &nbsp; Updating
              //     </div>
              //   ) : (
              //     'Save'
              //   )}
              // </Button>
            )}
          </Form>
        </Formik>

        <Row className="icon-cards-row my-4 justify-content-center">
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <IconCard
              title="Total Appointments"
              icon="iconsminds-testimonal"
              value="56"
              className="mb-4"
            />
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <IconCard
              title="Total Fees Paid"
              icon="iconsminds-dollar"
              value="$100"
              className="mb-4"
            />
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <IconCard
              title="BMI  "
              icon="iconsminds-jump-rope"
              value="21.1"
              className="mb-4"
            />
          </Colxx>
        </Row>
        {/* <Row className='w-100'> */}
          <Appoint />
        {/* </Row> */}
      </CardBody>
    </Card>
    </>
  );
}

const IconCard = ({ className = 'mb-4', icon, title, value }) => {
  return (
    <div className={`icon-row-item ${className}`}>
      <Card>
        <CardBody className="text-center">
          <i className={icon} />
          <p className="card-text font-weight-semibold mb-0">
            <IntlMessages id={title} />
          </p>
          <p className="lead text-center">{value}</p>
        </CardBody>
      </Card>
    </div>
  );
};
