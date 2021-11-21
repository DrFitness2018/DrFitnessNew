/*eslint-disable*/
import React from 'react';
import {
  CardText,
  CardSubtitle,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Badge,
  Button
} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import GlideComponent from 'components/carousel/GlideComponent';

const ImageCards = (props) => {
  return (
    <>
     
      <Colxx xxs="4" xs="6" lg="4">
   
        <Card className="mb-4">
          <div className="position-relative">
            <CardImg
              top
              width='100px'
              height='250px'
              src={props.image}
              alt=""
            />
            <Badge
              color="success"
              pill
              className="position-absolute badge-top-left-2"
            >
              {props.badge}
            </Badge>
          </div>
          <CardBody>
            <CardTitle>
              {props.title}
            </CardTitle>
            <CardSubtitle className="mb-4">
              {props.discription}
            </CardSubtitle>
            <div className="d-flex justify-content-end">
              <Button color="success" className="mb-2"
                onClick={() => { props.history.push(props.link) }}
              >
                Start Plan
              </Button>
            </div>
          </CardBody>
        </Card>
   
      </Colxx>
    </>
  );
};

export default ImageCards;
