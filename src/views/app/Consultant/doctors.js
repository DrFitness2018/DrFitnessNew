/*eslint-disable*/
import React from 'react';
import { Badge, Button, Card, CardBody, CardImg, CardSubtitle, CardText, Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import {LabConsultantsData} from './docANDconsultantData'
import ImageCards from 'containers/ui/ImageCards';
import { Link, NavLink } from 'react-router-dom';
import Rating from 'components/common/Rating';

const Doctors = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Appoint A Doctor" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        
        {LabConsultantsData.map((item) => {
            return (

              <UserCards  mainTitle={item.label} image={item?.imgSrc} badge='Dr Fitness Recommended' 
                details ={item.details} fee ={item.fee} rating={item.star} />
            );
          })}
      </Row>
    </>
  );
};

export default Doctors;

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