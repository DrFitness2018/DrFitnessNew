/*eslint-disable*/
import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Advance, beginner, challenges, gain, Intermediate } from './ExerciseMainData';
// import { Colxx, Separator } from 'components/common/CustomBootstrap';
// import Breadcrumb from 'containers/navs/Breadcrumb';
import ImageCards from 'containers/ui/ImageCards';
import ImageLambi from '../../../Images/lambi7.jpg'
import GlideComponent from 'components/carousel/GlideComponent';
const ExerciseGain = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Exercise" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
          {gain.map((item) => {
            return (

              <ImageCards mainTitle="Dr Fitness Gain Challenge" image={item?.img} badge='Dr Fitness Recommended'
                title={item?.heading} discription={item?.subheading} link={item?.btnlink} />
            );
          })}

        

      </Row>
      <Row>
          {challenges.map((item) => {
            return (

              <ImageCards mainTitle="Dr Fitness Gain Challenge" image={item?.img} badge='Dr Fitness Recommended'
                title={item?.heading} discription={item?.subheading} link={item?.btnlink} />
            );
          })}

        

      </Row>
      <Row>
      <GlideComponent
            settings={{
              gap: 10,
              perView: 2,
              type: 'carousel',
              breakpoints: {
                600: { perView: 1 },
                1400: { perView: 2 },
              },
            }}
          >
          {beginner.map((item) => {
            return (
              <>
              <ImageCards mainTitle="Dr Fitness Gain Challenge" image={item?.img} badge='Dr Fitness Recommended'
                title={item?.heading} discription={item?.subheading} link={item?.btnlink} />
            </>
            );
          })}

        
</GlideComponent>
      </Row>
      <Row>
          {Intermediate.map((item) => {
            return (

              <ImageCards mainTitle="Dr Fitness Gain Challenge" image={item?.img} badge='Dr Fitness Recommended'
                title={item?.heading} discription={item?.subheading} link={item?.btnlink} />
            );
          })}

        

      </Row>
      <Row>
          {Advance.map((item) => {
            return (

              <ImageCards mainTitle="Dr Fitness Gain Challenge" image={item?.img} badge='Dr Fitness Recommended'
                title={item?.heading} discription={item?.subheading} link={item?.btnlink} />
            );
          })}

        

      </Row>
    </>
  );
};

export default ExerciseGain;
