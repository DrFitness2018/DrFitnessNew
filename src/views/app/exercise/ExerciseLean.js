/*eslint-disable*/
import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import ImageCards from 'containers/ui/ImageCards';
import ImageLambi from '../../../Images/lambi7.jpg'

const ExerciseLean = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Exercise" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
        <ImageCards mainTitle="Dr Fitness Gain Challenge" image={ImageLambi} badge='Dr Fitness Recommended'
        title ="30 Days Plan" discription="Want to gain weight in 30 Days? Try these Exercises and Gain Weight" />
        </Colxx>
      </Row>
      <Row>
      <Colxx xxs="12" className="mb-4">
        <ImageCards mainTitle="Dr Fitness Gain Challenge" image={ImageLambi} badge='Dr Fitness Recommended'
        title ="30 Days Plan" discription="Want to gain weight in 30 Days? Try these Exercises and Gain Weight" />
        </Colxx>
        <Colxx xxs="12" className="mb-4">
        <ImageCards mainTitle="Dr Fitness Gain Challenge" image={ImageLambi} badge='Dr Fitness Recommended'
        title ="30 Days Plan" discription="Want to gain weight in 30 Days? Try these Exercises and Gain Weight" />
        </Colxx>
        <Colxx xxs="12" className="mb-4">
        <ImageCards mainTitle="Dr Fitness Gain Challenge" image={ImageLambi} badge='Dr Fitness Recommended'
        title ="30 Days Plan" discription="Want to gain weight in 30 Days? Try these Exercises and Gain Weight" />
        </Colxx>
      </Row>
    </>
  );
};

export default ExerciseLean;
