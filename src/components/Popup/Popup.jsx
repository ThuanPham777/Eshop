import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Button from '../Shared/Button';

const Popup = ({ orderPopup, handleWithCloseOrderPopUp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    let validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.address) validationErrors.address = 'Address is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Prevent form submission if any field is invalid
    }

    console.log('Form submitted:', formData);
    handleWithCloseOrderPopUp();

    // Reset form and errors
    setFormData({
      name: '',
      email: '',
      address: '',
    });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear the error for the current field
    }));
  };

  return (
    <div className={`${orderPopup ? 'block' : 'hidden'}`}>
      <div className='fixed h-screen w-screen top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
        <div className='w-[300px] bg-white p-4 fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 shadow-md rounded-xl dark:bg-gray-900 dark:text-white'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-lg font-semibold'>Order Now</h1>
            <FaTimes
              className='cursor-pointer'
              onClick={handleWithCloseOrderPopUp}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                className='form-input'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <p className='text-red-500'>{errors.name}</p>}
            </div>
            <div className='mb-3'>
              <input
                type='email'
                placeholder='Email'
                name='email'
                className='form-input'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>
            <div className='mb-3'>
              <input
                type='text'
                placeholder='Address'
                name='address'
                className='form-input'
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              {errors.address && (
                <p className='text-red-500'>{errors.address}</p>
              )}
            </div>
            <div className='mt-4 flex justify-center'>
              <Button
                text='Order Now'
                bgColor='bg-primary'
                textColor='text-white'
                handler={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
