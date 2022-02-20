/*eslint-disable*/

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { set } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'firebase';
// import './stripecontainer.css';

toast.configure();

export default function Innerpayment(props) {
  // alert("yaha prhai")
  // console.log(props,"Testing All Props")

  const feesFromModal = useSelector(
    (state) => state?.ExercisesReducer?.crrpayinfo
  );
  const UserInfo = useSelector((state) => state?.ExercisesReducer?.crruser);

  var data = props?.allData;

  console.log(data?.selectedDate);

  var uname, userid;

  UserInfo.map((user) => {
    (uname = user.name), (userid = user.uid);
  });

  console.log('Inner Page KA Data hai ye: ');
  // console.log('feesfrommodeal',props.price)

  const price = props.prices;
  const feesFromModaluid = feesFromModal.uid;
  async function handleToken(token, addresses) {
    const response = await axios.post('http://localhost:4000/checkout', {
      token,
      uname,
      userid,
      uname,
      price,
      feesFromModaluid,
    });
    const { status } = response.data;
    console.log('Response:', response.data);
    const AddSlotsInDB = async () => {
        try {
          await addDoc(collection(db, 'appointment'), {
            appointmentType: 'consultation',
            uid: data?.uid,
            userpic: data?.userpic,
            username: data?.username,
            DocID: data?.DocID,
            DocName: data?.DocName,
            Docpic: data?.Docpic,
            fee: data?.fee,
            status: data?.status,
            slotTime: data?.slotTime,
            reason: data?.reason,
            selectedDate: data?.selectedDate,
            createAt: data?.createAt,
          });
          toast.success('Appointment Added');
        } catch (error) {
          toast.error('Data Not Sent' + error);
        }
      };
    const AddSlotsInDBPayment = async () => {
        try {
          await addDoc(collection(db, 'invoices'), {
            appointmentType: 'consultation',
            uid: data?.uid,
            userpic: data?.userpic,
            username: data?.username,
            DocID: data?.DocID,
            DocName: data?.DocName,
            Docpic: data?.Docpic,
            fee: data?.fee * 80/100,
            // status: data?.status,
            slotTime: data?.slotTime,
            // reason: data?.reason,
            selectedDate: data?.selectedDate,
            createAt: data?.createAt,
          });
          toast.success('Invoices Created');
        } catch (error) {
          toast.error('Invoices Not Created' + error);
        }
      };
    if (status === 'success') {
        toast('Success! Check email for details', { type: 'success' });
        AddSlotsInDB();
        AddSlotsInDBPayment();
    } else {
      toast('Something went wrong', { type: 'error' });
    }
  }
  return (
    <div className="container">
      <div className="product" style={{ color: 'gray' }}>
        <h4>
          Name:{' '}
          <span
            className="float-right"
            style={{ textTransform: 'capitalize', fontWeight: 'bold' }}
          >
            {uname}
          </span>
        </h4>
        <h4>
          Booked with:{' '}
          <span
            className="float-right"
            style={{ textTransform: 'capitalize', fontWeight: 'bold' }}
          >
            {feesFromModal.name}
          </span>
        </h4>
        <h4>
          Selected Date:{' '}
          <span
            className="float-right"
            style={{ textTransform: 'capitalize', fontWeight: 'bold' }}
          >
            {data?.selectedDate}
          </span>
        </h4>
        <h4>
          Slot:{' '}
          <span
            className="float-right"
            style={{ textTransform: 'capitalize', fontWeight: 'bold' }}
          >
            {data?.slotTime}
          </span>
        </h4>
        <h4>
          Appointment Fee{' '}
          <span
            className="float-right"
            style={{ textTransform: 'capitalize', fontWeight: 'bold' }}
          >
            {' '}
              {price} PKR
          </span>
        </h4>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51KV05EE6nbSSxCIjDdge9ne28bMevfze801LCN1dSWAHlDFyJLwXp1ayUTROsqwnvnMCXSP0nF1yM4KdcrJtoZ9L00KeoYgGCs"
        token={handleToken}
        amount={price * 100}
        name={uname}
        billingAddress
        shippingAddress
      />
    </div>
  );
}
