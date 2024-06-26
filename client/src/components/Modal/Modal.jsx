import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import Contact from './Contact';
import HatNumber from './Hat';
import RepairOrder from './RepairOrder';
import CustomerName from './CustomerName';
import Vehicle from './Vehicle';
import Priority from './Priority';
import { useMutation } from '@apollo/client';
import { ADD_CUSTOMER } from '../../utils/mutations';
import { QUERY_CUSTOMER } from '../../utils/queries';
import './custom.css';

const Modal = ({ showModal, setShowModal, size }) => {
  const [formData, setFormData] = useState({
    hatNumber: '',
    repairOrder: '',
    customerName: '',
    vehicle: '',
    contact: '',
    priority: 'Drop Off',
  });

  const [addCustomer, { loading, error }] = useMutation(ADD_CUSTOMER, {
    refetchQueries: [QUERY_CUSTOMER, "Customers"]
  });

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { hatNumber, repairOrder, customerName, vehicle, contact, priority } = formData;
    const isEmpty = [hatNumber, repairOrder, customerName, vehicle, contact].some((value) => value === '');

    if (isEmpty) {
      alert('Please fill out all fields.');
      return;
    }
    
    try {
      const { data } = await addCustomer({
        variables: {
          hatNumber,
          repairOrder,
          customerName,
          vehicle,
          contact,
          priority,
        },
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [setShowModal]);

  return (
    <Dialog open={showModal} handler={() => {}} size={size} dismiss={{ escapeKey: true }}>
      <DialogHeader className="text-2xl font-semibold text-gray-800 flex justify-center">Add New Customer</DialogHeader>
      <DialogBody className="flex justify-center p-6 bg-white rounded-lg shadow-lg">
        <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
          <HatNumber value={formData.hatNumber} onChange={handleInputChange} />
          <RepairOrder value={formData.repairOrder} onChange={handleInputChange} />
          <CustomerName value={formData.customerName} onChange={handleInputChange} />
          <Vehicle value={formData.vehicle} onChange={handleInputChange} />
          <Contact value={formData.contact} onChange={handleInputChange} />
          <Priority value={formData.priority} onChange={handleInputChange} />
          <button type="submit" className="hidden"></button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </DialogBody>
    </Dialog>
  );
};

export default Modal;
