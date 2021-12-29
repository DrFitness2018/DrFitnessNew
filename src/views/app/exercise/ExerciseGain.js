/*eslint-disable*/
import React from 'react';
import { CardTitle, Row } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import {
  Advance,
  beginner,
  challenges,
  gain,
  Intermediate,
} from './ExerciseMainData';
// import { Colxx, Separator } from 'components/common/CustomBootstrap';
// import Breadcrumb from 'containers/navs/Breadcrumb';
import ImageCards from 'containers/ui/ImageCards';
import './exercise.css'
import ImageLambi from '../../../Images/lambi7.jpg';
import GlideComponent from 'components/carousel/GlideComponent';
import ExInner from './ExerciseInnerPage';
const ExerciseGain = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Exercise" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row 
      className='justify-content-center'
      >
        {gain.map((item) => {
          return (
            <ImageCards
              mainTitle="Dr Fitness Gain Challenge"
              image={item?.img}
              badge="Dr Fitness Recommended"
              bColor = "success"
              title={item?.heading}
              showweeksndays={item?.showweeknday}
              discription={item?.subheading}
              link={item?.btnlink}
              heading1s={item?.heading1}
            />
          );
        })}
      </Row>
      <Row
      className='justify-content-center'
      >
        {challenges.map((item) => {
          return (
            <ImageCards
              mainTitle="Dr Fitness Gain Challenge"
              image={item?.img}
              badge="Dr Fitness Recommended"
              bColor = "success"
              heading1s={item?.heading1}
              title={item?.heading}
              showweeksndays={item?.showweeknday}
              discription={item?.subheading}
              link={item?.btnlink}
            />
          );
        })}
      </Row>
      <Row>
        <CardTitle className='p-3' style={{fontWeight:'bolder'}}>Are You A Beginner? Don't Worry try These Exercises</CardTitle>
        <div
          className="mb-4 "
          style={{
            width: '100%',
            display: 'flex',
            flexWrap:'nowrap',
            // justifyContent: 'center',
            // overflow: 'auto',
            // display:'inline-block',
            overflowX: "scroll",
            scrollbarWidth:'thin',
            scrollbarColor: "blue orange"
            // overflowY: "hidden",
            // whiteSpace: 'nowrap',
          }}
        >
          {beginner.map((item) => {
            return (
              <>
                <ImageCards
                  mainTitle="Dr Fitness Gain Challenge"
                  image={item?.img}
                  badge="Hot"
              bColor = "danger"
              showweeksndays={item?.showweeknday}
                  heading1s={item?.heading1}
                  title={item?.heading}
                  discription={item?.subheading}
                  link={item?.btnlink}
                />
              </>
            );
          })}
        </div>
      </Row>
      <Row>
      <CardTitle className='p-3' style={{fontWeight:'bolder'}}>Intermediate Exercises</CardTitle>
      <div
          className="mb-4 "
          style={{
            width: '100%',
            display: 'flex',
            // justifyContent: 'center',
            overflow: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
        {Intermediate.map((item) => {
          return (
            <ImageCards
              mainTitle="Dr Fitness Gain Challenge"
              image={item?.img}
              badge="Trend"
              bColor = "warning"
              heading1s={item?.heading1}
              title={item?.heading}
              showweeksndays={item?.showweeknday}
              discription={item?.subheading}
              link={item?.btnlink}
            />
          );
        })}
        </div>
      </Row>
      <Row>
      <CardTitle className='p-3' style={{fontWeight:'bolder'}}>Advance Exercises</CardTitle>

      <div
          className="mb-4 "
          style={{
            width: '100%',
            display: 'flex',
            // justifyContent: 'center',
            overflow: 'auto',
            whiteSpace: 'nowrap',
            
          }}
        >
        {Advance.map((item) => {
          return (
            <ImageCards
              mainTitle="Dr Fitness Gain Challenge"
              image={item?.img}
              badge="Experts Only"
              bColor = "info"
              heading1s={item?.heading1}
              title={item?.heading}
              discription={item?.subheading}
              link={item?.btnlink}
              showweeksndays={item?.showweeknday}
            />
          );
        })}
        </div>
      </Row>
    </>
  );
};

export default ExerciseGain;

const BasicCarouselItem = ({ title, img, detail, badges, btn }) => {
  return (
    <div className="glide-item">
      <Card className="flex-row">
        <div className="w-50 position-relative">
          <img className="card-img-left" src={img} alt={title} />
          <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
            {badges}
          </span>
        </div>
        <div className="w-50">
          <CardBody>
            <center>
              <h6 className="mb-4 ">{title}</h6>
            </center>
            <Button color="outline-primary" onClick={btn} className="mb-1">
              Start Plan
            </Button>
            <footer className="mt-2">
              <p className="text-muted text-small mb-0 font-weight-light">
                {detail}
              </p>
            </footer>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};
