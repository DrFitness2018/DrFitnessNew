/*eslint-disable*/
import React, { useState } from 'react';
import {
  Collapse,
  Row,
  Button,
  FormGroup,
  CustomInput,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import GlideComponent from 'components/carousel/GlideComponent';
import img1 from '../../../Images/Foods/diet/gain30days.jpg';
import img1P from '../../../Images/Foods/diet/lean30days.jpg';
import img1C from '../../../Images/Foods/diet/bal.jpg';

import { Card, CardBody, CardTitle } from 'reactstrap';
import { CardHeader, Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { DietDay1 } from './dietMainData';
// import ImageCardList from 'containers/ui/ImageCardList';

const GainDiet = ({ match }) => {
  const [collapse, setCollapse] = useState(false);
  const [collapseD, setCollapseD] = useState(false);
  const [activeFirstTab, setActiveFirstTab] = useState('1');
  const [activeSecondTab, setActiveSecondTab] = useState('1');
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.blank-page" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="pl-0 pr-0 mb-5">
          <GlideComponent
            settings={{
              gap: 50,
              perView: 2,
              type: 'carousel',
              breakpoints: {
                600: { perView: 1 },
                1400: { perView: 2 },
              },
            }}
          >
            {/* {items.map((item) => {
              return (
                <div key={item.id}>
                  <BasicCarouselItem {...item} />
                </div>
              );
            })} */}
            <BasicCarouselItem
              title="Gain Weight"
              img={img1}
              detail="A 30 Days Meal Plan for Weight Gain"
              badges="Trending"
              btn={() => setCollapse(!collapse)}
            />
            <BasicCarouselItem
              title="Lean Weight"
              img={img1P}
              detail="A 30 Days Meal Plan for Weight Lean"
              badges="Trending"
            />
            <BasicCarouselItem
              title="Balanced Diet"
              img={img1C}
              detail="A Balanced Diet Plan For every One"
              badges="Trending"
            />
          </GlideComponent>
        </Colxx>
        <Colxx>
          <Collapse isOpen={collapse}>
            <div className="p-4 border mt-4">
              <Colxx xxs="12" xs="6" lg="12">
                <Card className="mb-4 ">
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

                  <TabContent activeTab={activeSecondTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Colxx sm="12" lg="12">
                          <CardBody>
                            {/* <CardTitle className="mb-4">
                          Homemade Cheesecake with Fresh Berries and Mint
                        </CardTitle> */}
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
                                  color="outline-primary active"
                                  style={{
                                    width: '8%',
                                    height: '70px',
                                    borderRadius: '50%',
                                  }}
                                  onClick={() => {
                                    setCollapseD(!collapseD);
                                  }}
                                >
                                  Day1
                                </Button>
                                <Button
                                  style={{
                                    width: '8%',
                                    height: '70px',
                                    borderRadius: '50%',
                                  }}
                                  className="default mb-2 mr-2"
                                  color="outline-primary"
                                >
                                  Day2
                                </Button>
                                <Button
                                  style={{
                                    width: '8%',
                                    height: '70px',
                                    borderRadius: '50%',
                                  }}
                                  className="default mb-2 mr-2"
                                  color="outline-primary"
                                >
                                  Day3
                                </Button>
                                <Button
                                  style={{
                                    width: '8%',
                                    height: '70px',
                                    borderRadius: '50%',
                                  }}
                                  className="default mb-2 mr-2"
                                  color="outline-primary"
                                >
                                  Day4
                                </Button>
                                <Button
                                  style={{
                                    width: '8%',
                                    height: '70px',
                                    borderRadius: '50%',
                                  }}
                                  className="default mb-2 mr-2"
                                  color="outline-primary"
                                >
                                  Day5
                                </Button>
                                <Button
                                  style={{
                                    width: '8%',
                                    height: '70px',
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
                                    height: '70px',
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
                          </CardBody>
                        </Colxx>
                        <Colxx>
                          <div className="mt-4 container">
                            <Collapse isOpen={collapseD}>
                              {DietDay1.map((diets, id) => {
                                return (
                                  <>
                                    <ImageCardList
                                      FoodTime={diets.FoodTime}
                                      img={diets.img}
                                      Description={diets.Description}
                                    />
                                  </>
                                );
                              })}
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

export default GainDiet;

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
            <center><h6 className="mb-4 ">{title}</h6></center>
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
                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                  <p className="mb-1 text-muted text-small w-15 w-sm-100">
                    {props.FoodTime}
                  </p>
                  <NavLink to="#" location={{}} className="w-100 w-sm-100">
                    <p className="list-item-heading mb-1 ">
                      {props.Description}
                    </p>
                  </NavLink>
                </div>
                <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                  <FormGroup className="mb-0">
                    <CustomInput type="checkbox" id="check1" label="" />
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
