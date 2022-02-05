/*eslint-disable*/
import React, { useState } from 'react';
import { Badge, Button, ButtonGroup, Card, CardBody, CardImg, CardSubtitle, CardText, Row, TabContent, TabPane } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import {Trainer} from './docANDconsultantData'
import ImageCards from 'containers/ui/ImageCards';
import { Link, NavLink } from 'react-router-dom';
import Rating from 'components/common/Rating';  

const Trainers = ({ match }) => {
  const [selectedRadio, setSelectedRadio] = useState('0');
  const [activeSecondTab, setActiveSecondTab] = useState('1');

  
  const [modalShow, setModalShow] = useState(false);

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'users'), (snapshot) => {
      setDoctors(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);


  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Appoint A Doctor" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
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
                {doctors &&
                  doctors.filter((user) => user.userType === 'consultant')
                  .filter((user)=> user.conType === 'trainer')
                  .map((user, index) => {
                    return (
                      <UserCards
                        mainTitle={user.name}
                        image={user?.avatar}
                        badge="Dr Fitness Recommended"
                        // day={user.Degree}
                        day={user.designation}
                        fee={user.fee}
                        rating={user.rating}
                        button={user.btn}
                        // status={item.status}
                      />
                    );
                  })}
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

const UserCards= (props)=>{
  return(
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
                    <RatingExamples star={props.rating}/>
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