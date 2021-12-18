/*eslint-disable */
import React from 'react';
import { ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import {
    Collapse,
    Button,
    FormGroup,
    CustomInput,
  } from 'reactstrap';
  import { useState,useEffect } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { CardHeader, Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Day1, Day2, Day3 } from './exerciseDATA';
import play from "../../../Images/sound/start.mp3";
import secleft from "../../../Images/sound/5_sec.mp3";
import useSound from "use-sound";
import { Modal } from "reactstrap";
import { Avatar } from '@material-ui/core';
import Timer from './Timer';

const ExerciseInnerPage = (props) => {
    const match = props?.match;
    const showweekdays = props?.location?.data?.showweeknday;

    console.log(showweekdays,"Testing Show true")

    const WeightGainMonth = [Day1,Day2,Day3]
    const [collapse, setCollapse] = useState(true);
    const [collapseD, setCollapseD] = useState(false);
    const [activeFirstTab, setActiveFirstTab] = useState('1');
    const [activeSecondTab, setActiveSecondTab] = useState('1');
    const [letsPlay] = useSound(play);
  
    const LinksBan = [
      {
        subLinkName: "Exercises",
        subDash: "/",
        subLink: "/diets",
      },
    ];
    
    const [modalShow, setModalShow] = useState(false);

    const [DayName,setDayName] = useState('Day1')
    const [DayObj,setDayObj] = useState(Day1)
    const Buttons = ['Day1','Day2','Day3','Day4','Day5','Day6','Day7']

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Lets Start Exercise" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
        <MyVerticallyCenteredModals
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                              day={DayName}
                              dayObj = {DayObj}
                            />
        <Collapse isOpen={collapse}>
            <div className="p-4 border mt-4">
              <Colxx xxs="12" xs="6" lg="12">
                <Card className="mb-4 ">

                    {showweekdays ? 
                    (
                      <>
                          {DayObj.map((exer, id) => {
                            return (
                              <>
                                <ImageCardList
                                  FoodTime={exer.exerciseName}
                                  img={exer.gifImage}
                                  Description={exer.description}
                                  Reps={exer.Reps}
                                />
                                
                              </>

                            );

                          })
                          }
                          <div className='text-center '>
                              <Button 
                                onClick={() => {
                                    letsPlay()
                                    setModalShow(true)
                                  }
                                  }
                              className='mb-4'
                              color="outline-primary">
                              Start Exercise
                              </Button>
                            </div>
                            </>
                            )
                     : 
                      <CardHeader className="pl-0 pr-0">
                      <Nav tabs className=" card-header-tabs  ml-0 mr-0">
                        <NavItem className="w-20 text-center">
                          <NavLink
                            to="#"
                            location={{}}
                            className={classnames({
                              active: activeSecondTab === '1',
                              'nav-link': true,
                            })}
                            onClick={() => {
                              setActiveSecondTab('1');
                            }}
                          >
                            Week 1
                          </NavLink>
                        </NavItem>
                        <NavItem className=" w-20 text-center">
                          <NavLink
                            to="#"
                            location={{}}
                            className={classnames({
                              active: activeSecondTab === '2',
                              'nav-link': true,
                            })}
                            onClick={() => {
                              setActiveSecondTab('2');
                            }}
                          >
                            Week 2
                          </NavLink>
                        </NavItem>
                        <NavItem className=" w-20 text-center">
                          <NavLink
                            to="#"
                            location={{}}
                            className={classnames({
                              active: activeSecondTab === '3',
                              'nav-link': true,
                            })}
                            onClick={() => {
                              setActiveSecondTab('3');
                            }}
                          >
                            Week 3
                          </NavLink>
                        </NavItem>
                        <NavItem className="w-20  text-center">
                          <NavLink
                            to="#"
                            location={{}}
                            className={classnames({
                              active: activeSecondTab === '4',
                              'nav-link': true,
                            })}
                            onClick={() => {
                              setActiveSecondTab('4');
                            }}
                          >
                            Week 4
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardHeader>
                  }

                  <TabContent activeTab={activeSecondTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Colxx sm="12" lg="12">
                          <CardBody>
                            {/* <CardTitle className="mb-4">
                          Homemade Cheesecake with Fresh Berries and Mint
                        </CardTitle> */}
                           {showweekdays ? 
                          ""
                          : 
                          <>
                           <div className="mb-4 " style={{ width: '100%' }}>
                              <div
                                className="mb-2"
                                style={{
                                  display: 'flex',
                                  // width: '100%',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  flexWrap: 'wrap',
                                  // backgroundColor: 'lightpink',
                                }}
                              >
                                <Button
                                  className="default mb-2 mr-2"
                                  color="outline-primary"
                                  style={{
                                    width: '8%',
                                    height: '80px',
                                    borderRadius: '50%',
                                  }}
                                  onClick={() => {
                                    setCollapseD(!collapseD);
                                    setDayName('Day1')
                                    setDayObj(Day1)
                                  }}

                                >
                                  Day1
                                </Button>
                                <Button
                                  style={{
                                    width: '8%',
                                    height: '80px',
                                    borderRadius: '50%',
                                  }}
                                  className="default mb-2 mr-2"
                                  color="outline-primary"
                                  onClick={() => {
                                    setCollapseD(!collapseD);
                                    setDayName('Day2')
                                    setDayObj(Day2)
                                    
                                  }}
                                >
                                  Day2
                                </Button>
                                <Button
                                  style={{
                                    width: '8%',
                                    height: '80px',
                                    borderRadius: '50%',
                                  }}
                                  className="default mb-2 mr-2"
                                  color="outline-primary"
                                  onClick={() => {
                                    setCollapseD(!collapseD);
                                    setDayName('Day3')
                                    setDayObj(Day3)
                                  }}
                                >
                                  Day3
                                </Button>
                                <Button
                                  style={{
                                    width: '8%',
                                    height: '80px',
                                    borderRadius: '50%',
                                  }}
                                  className="default mb-2 mr-2"
                                  color="outline-primary"
                                  onClick={() => {
                                    setCollapseD(!collapseD);
                                    setDayName('Day4')
                                    setDayObj(Day4)
                                  }}
                                >
                                  Day4
                                </Button>
                                <Button
                                  style={{
                                    width: '8%',
                                    height: '80px',
                                    borderRadius: '50%',
                                  }}
                                  className="default mb-2 mr-2"
                                  color="outline-primary"
                                  onClick={() => {
                                    setCollapseD(!collapseD);
                                    setDayName('Day5')
                                    setDayObj(Day5)
                                  }}
                                >
                                  Day5
                                </Button>
                                <Button
                                  style={{
                                    width: '8%',
                                    height: '80px',
                                    borderRadius: '50%',
                                  }}
                                  className="default mb-2 mr-2"
                                  color="outline-primary"
                                  
                                >
                                  Day6
                                </Button>
                                <Button
                                  style={{
                                    width: '8%',
                                    height: '80px',
                                    borderRadius: '50%',
                                  }}
                                  className="default mb-2 mr-2"
                                  color="outline-primary"
                                >
                                  Day7
                                </Button>
                              </div>
                            </div>
                            <div></div>
                          </> 
                          }
                          </CardBody>
                        </Colxx>
                        <Colxx>
                          <div className="mt-4 container">
                            <Collapse isOpen={collapseD}>
                              {DayObj.map((exer, id) => {
                                return (
                                  <>
                                    <ImageCardList
                                      FoodTime={exer.exerciseName}
                                      img={exer.gifImage}
                                      Description={exer.description}
                                      Reps={exer.Reps}
                                    />
                                  </>
                                );
                              })}
                              <div className='text-center '>
                              <Button 
                                onClick={() => {
                                    letsPlay()
                                    setModalShow(true)
                                  }
                                  }
                              className='mb-4'
                              color="outline-primary">
                              Start Exercise
                              </Button>
                            </div>
                          
                            </Collapse>
                          </div>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">
                              Wedding Cake with Flowers Macarons and Blueberries
                            </CardTitle>
                            <Button outline size="sm" color="primary">
                              Edit
                            </Button>
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">
                              Cheesecake with Chocolate Cookies and Cream
                              Biscuits
                            </CardTitle>
                            <Button outline size="sm" color="primary">
                              Edit
                            </Button>
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                  </TabContent>
                </Card>
              </Colxx>
            </div>
          </Collapse>
        </Colxx>
      </Row>
    </>
  );
};

export default ExerciseInnerPage;


const ImageCardList = (props) => {
    return (
      <Row>
        <Colxx xxs="12">
          <CardTitle className="mb-4"></CardTitle>
          <Row>
            <Colxx xxs="12">
              <Card className="d-flex flex-row mb-3">
                <NavLink to="#" location={{}} className="d-flex">
                  <img
                    alt="Thumbnail"
                    src={props.img}
                    className="list-thumbnail responsive border-0 card-img-left"
                    style={{objectFit:'cover'}}
                  />
                </NavLink>
                <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                  <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center ">
                    <p className="mb-1 text-small w-15 w-sm-100 list-item-heading">
                      {props.FoodTime}
                    </p>
                    <NavLink to="#" location={{}} className="w-100 w-sm-100">
                      <p className="mb-1 text-muted ">
                        {props.Description}
                      </p>
                    </NavLink>
                  </div>
                  <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                    <FormGroup className="mb-0">
                    <p className="list-item-heading mb-1 ">
                       Reps {props.Reps}
                      </p>
                    </FormGroup>
                  </div>
                </div>
              </Card>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    );
  };

  
//   function MyVerticallyCenteredModals(props) {
//     return(
//         <Modal isOpen={props.show} centered size='sm' style={{boxShadow:'none'}}>
//             <ModalHeader>Abc 123</ModalHeader>
//             <ModalBody>Hello</ModalBody>
//         </Modal>
//     )
//   }

  function MyVerticallyCenteredModals(props) {

    const [question, setQuestion] = useState(null);
    const [questionNumber, setQuestionNumber] = useStickyState(1,'questionNumber  ');
  
    const [timeOut, setTimeOut] = useState(false);
    const [seclefts] = useSound(secleft);
    const [count, setCounter] = useState();
    
    // const [c,sc] = useStickyState(0,'count')

    console.log("DayObj --- >",props.dayObj)
    useEffect(() => {
      setQuestion(props.dayObj[questionNumber - 1]);
    }, [props.dayObj, questionNumber]);


    useEffect(() => {
      console.log("counter --- >",count)
      if(count === 6)
      {
        seclefts();
      }
   
    }, [count,seclefts,questionNumber])
  
    const abc = (Value) => {
      setCounter(Value);
    };
  
    const handleClick = () => {
      setQuestionNumber((prev) => prev + 1);
    };
  
    let totalLen = Day1.length;
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={props.show} style={{boxShadow:'none'}}
      >
        <ModalHeader closeButton>
          <div id="contained-modal-title-vcenter">
            {props.day } <h6> Exercise No {questionNumber}</h6>
          </div>
        </ModalHeader>
        <ModalBody>
          {questionNumber === totalLen ? (
            <div
              className="appoinmentCards d-flex justify-content-center"
              style={{ flexDirection: "column " }}
            >
              <div className="container">
              <h3 style={{color:'green'}}>Congratulations! You have Completed Todays Exercises</h3>
              <h4>Total No of Exercises:<span style={{fontWeight:'bold',color:'green'}}>{totalLen}</span></h4>
              <h4>Total Time Spend:<span style={{fontWeight:'bold',color:'green'}}>{totalLen * 30}</span> sec</h4>
            </div>
            </div>
          ) : (
            <div>
              <>
  
                  <div
                    className="appoinmentCards d-flex justify-content-center"
                    style={{ flexDirection: "column " }}
                  >
                    <div>
                      <Avatar   
                        alt=""
                        src={question?.gifImage}
                        style={{
                          width: "300px",
                          height: "300px",
                          textAlign: "left",
                        }}
                      />
                    </div>
                    <div
                      style={{ textAlign: "left", textTransform: "capitalize" }}
                    >
                      <h4
                        style={{
                          fontFamily: "fantasy",
                          fontWeight: "bold",
                        }}
                      >
                        {question?.exerciseName}
                      </h4>
                    </div>
                    <h5>
                      No of Reps
                      <span style={{ color: "green" }}>{question?.Reps}</span>
                    </h5>
                     <h6
                            style={{
                              fontweight: "bold",
                              textAlign: "center",
                              backgroundColor: "#f8f8f8",
                              padding:10,
                              borderRadius:'10px',
                              color:'gray'
                            }}
                          >
                            {question?.description}
                          </h6>
                    <div
                      style={{
                        display: "flex",
                        // backgroundColor: "lightgreen",
                        width: "100%",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-around",
                        minHeight: "50px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "end",
                          backgroundColor: "",
                        }}
                      >
                        <Timer
                          setTimeOut={setTimeOut}
                          questionNumber={questionNumber}
                          counterValue={abc}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          //  backgroundColor: "lightgrey",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          margin: 2,
                          width: "30%",
                        }}
                      >
                        <Button variant="outline-info" style={{ width: "100%" }}>
                          Skip
                        </Button>
                        <Button
                          variant="success"
                          style={{ width: "100%", marginTop: 2 }}
                          onClick={() => {
                            handleClick();
                            // daycounter();
                          }}
                        >
                          Next Exercise
                        </Button>
                      </div>
                    </div>
                  </div>

              </>
              {/* <div
                  className="appoinmentCards d-flex justify-content-center"
                  style={{ flexDirection: "column " }}
                >
                  <h2>Congratulations! You have Completed Todays Exercises</h2>
                  <h4>Total No of Exercises: {totalLen}</h4>
                  <h4>Total Time Spend: {totalLen * 30} seconds</h4>
                  </div> */}
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onHide}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }

  
function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }