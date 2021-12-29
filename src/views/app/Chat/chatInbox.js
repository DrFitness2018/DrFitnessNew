/*eslint-disable*/
import React, { useEffect } from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import Home from './containers/HomePage/index'
import Login from './containers/LoginPage/index'
import Signup from './containers/RegisterPage/index'
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from '../../../redux/ChatRedux/actions';
import Chat from '../applications/chat'

const Inbox = ({ match }) => {
  const auth = useSelector(state => state?.auth);
  const dispatch = useDispatch()


  // useEffect(() => {
  //   if(!auth?.authenticated){
  //     dispatch(isLoggedInUser())
  //   }
  // }, []);
  return (
    <>
      {/* <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Inbox" match={match} />
          <Separator className="mb-5" />
          <Signup />
        <Login />
        </Colxx>
      </Row> */}

      {/* <Row> */}

        {/* <Colxx xxs="12" className="mb-4">
          <p>
            Inbox
          </p>
        </Colxx> */}
        {/* <Home /> */}
        <Chat/>
      {/* </Row> */}
    </>
  );
};

export default Inbox;
