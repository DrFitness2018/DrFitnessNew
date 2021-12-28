/* eslint-disable */

import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from 'redux/actions';

import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import { adminRoot } from 'constants/defaultValues';
import Basic from 'containers/wizard/Basic';
// import logo from '../../assets/logos/logoMuqqa1.png'

const Register = ({ history }) => {
  const [email] = useState('wahajshera79@gmail.com');
  const [password] = useState('fitness123');
  const [name] = useState('Abdul Wahaj Shera');

  const onUserRegister = () => {
    if (email !== '' && password !== '') {
      history.push(adminRoot);
    }
    // call registerUserAction()
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="12" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
            <p className="white mb-0">
              Please use this form to register. <br />
              If you are a member, please{' '}
              <NavLink to="/user/login" className="white">
                login
              </NavLink>
              .
            </p>
          </div>
          
          
          
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
              {/* <span><img src={logo} /></span> */}
              {/* <br/><br/><br/> */}
            </NavLink>
            
            <Form>
            <Basic />
            </Form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
