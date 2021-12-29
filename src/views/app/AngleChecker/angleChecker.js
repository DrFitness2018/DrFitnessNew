/*eslint-disable*/
import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import Rating from 'components/common/Rating';
import imgs from 'Images/tulaibs.PNG';

const AngleChecker = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Angle Checker" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
</Colxx>
      </Row>
    </>
  );
};

export default AngleChecker;
