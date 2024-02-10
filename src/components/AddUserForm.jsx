import React, { useState } from 'react';

const AddUserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    avatar: '', 
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    suite: '',
    city: '',
    companyName: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddUser(formData);
    // Clear form fields after submission
    setFormData({
      avatar: '',
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      suite: '',
      city: '',
      companyName: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        name="avatar"
        placeholder=" Please Give Avatar URL"
        value={formData.avatar}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="street"
        placeholder="Street"
        value={formData.street}
        onChange={handleChange}
      />
      <input
        type="text"
        name="suite"
        placeholder="Suite"
        value={formData.suite}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
