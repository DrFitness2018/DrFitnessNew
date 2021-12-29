/*eslint-disable*/
import React from 'react';
import { CardTitle, Row } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import ImageCards from 'containers/ui/ImageCards';
import ImageLambi from '../../../Images/lambi7.jpg'
import { Lean, challengesLean, yoga  } from './ExerciseMainData';

const ExerciseLean = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12" >
          <Breadcrumb heading="Exercise" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>

          {Lean.map((item) => {
            return (
              <ImageCards   mainTitle="Dr Fitness Gain Challenge" image={item?.img} badge='Dr Fitness Recommended'
              bColor = "success"
              heading1s={item?.heading1} 
                title={item?.heading} discription={item?.subheading} link={item?.btnlink} />
            );
          })}

        

      </Row>
      <CardTitle className='p-1' style={{fontWeight:'bolder'}}>Belly Fat Challenge</CardTitle>
      <Row>

          {challengesLean.map((item) => {
            return (
              
              <ImageCards mainTitle="Dr Fitness Gain Challenge" image={item?.img} badge='Hot !'
              bColor = "danger"
              heading1s={item?.heading1}
              title={item?.heading} discription={item?.subheading} link={item?.btnlink} />
              );
            })}

      
      </Row>
            <CardTitle className='p-1 ' style={{fontWeight:'bolder'}}>Yoga Life</CardTitle>

      <Row>
          {yoga.map((item) => {
            return (

              <ImageCards mainTitle="Dr Fitness Gain Challenge" image={item?.img} badge='Trending'
              bColor = "info"
              heading1s={item?.heading1}
                title={item?.heading} discription={item?.subheading} link={item?.btnlink} />
            );
          })}

        

      </Row>
    </>
  );
};

export default ExerciseLean;
