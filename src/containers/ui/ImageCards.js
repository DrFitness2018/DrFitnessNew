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

const ImageCards = (props) => {
  return (
    <Row>
      <Colxx xxs="12">
        <CardTitle className="mb-4">
          {props.mainTitle}
        </CardTitle>
          <Colxx xxs="12" xs="6" lg="4">
            <Card className="mb-4">
              <div className="position-relative">
                <CardImg
                  top
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
                onClick={()=>{props.history.push(props.link)}}
                >
                  Start Plan
              </Button>
                </div>
              </CardBody>
            </Card>
          </Colxx>
      </Colxx>
    </Row>
  );
};

export default ImageCards;
