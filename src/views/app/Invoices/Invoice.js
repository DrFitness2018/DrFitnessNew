/*eslint-disable*/
import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  CustomInput,
  FormGroup,
  TabContent,
  Table,
  TabPane,
} from 'reactstrap';
const invData = [
  {
    id: 1,
    invID: "OD1236547890",
    DocID: "DC1",
    label: 'DR. SHAHEDA ANWAR',
    Date: '12-02-2022',
    fee: 2000,
    time: '2:00-2:00 pm',
    status:'pending',
    action: 'pending',
  },
  {
    id: 2,
    invID: "OD1236547890",
    DocID: "DC1",
    label: 'DR. SHAHEDA ANWAR',
    Date: '12-02-2022',
    fee: 2000,
    time: '2:00-2:00 pm',
    status:'pending',
    action: 'pending',
  },
  {
    id: 3,
    invID: "OD1236547890",
    DocID: "DC1",
    label: 'DR. SHAHEDA ANWAR',
    Date: '12-02-2022',
    fee: 2000,
    time: '2:00-2:00 pm',
    status:'pending',
    action: 'pending',
  },
  {
    id: 4,
    invID: "OD1236547890",
    DocID: "DC1",
    label: 'DR. SHAHEDA ANWAR',
    Date: '12-02-2022',
    fee: 2000,
    time: '2:00-2:00 pm',
    status:'pending',
    action: 'pending',
  },
  {
    id: 5,
    invID: "OD1236547890",
    DocID: "DC1",
    label: 'DR. SHAHEDA ANWAR',
    Date: '12-02-2022',
    fee: 2000,
    time: '2:00-2:00 pm',
    status:'pending',
    action: 'pending',
  },
  {
    id: 6,
    invID: "OD1236547890",
    DocID: "DC1",
    label: 'DR. SHAHEDA ANWAR',
    Date: '12-02-2022',
    fee: 2000,
    time: '2:00-2:00 pm',
    status:'pending',
    action: 'pending',
  },
];
const Invoice = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Invoices" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>Pending Appointments</CardTitle>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>InvoiceID</th>
                    <th>DoctorID</th>
                    <th>Doctor Name</th>
                    <th>Appoitment Date</th>
                    <th>Appoitment Time</th>
                    <th>Status</th>
                    <th>Fees</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {invData.map((item, index) => {
                  return (
                    <>
                      <tbody>
                        <tr>
                          <th scope="row">{item.id}</th>
                          <td>
                            {item.invID}
                          </td>
                          <td className="pt-50">{item.DocID}</td>
                          <td>{item.label}</td>
                          <td>{item.Date}</td>
                          <td>{item.time}</td>
                          <td>{item.status}</td>
                          <td>{item.fee}</td>
                          <td>{item.action}</td>
                          
                        </tr>
                      </tbody>
                    </>
                  );
                })}

              </Table>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default Invoice;
