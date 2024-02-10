import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddUserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    avatar: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    companyName: '' 
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddUser = () => {
    if (!formData.avatar ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.address ||
        !formData.city ||
        !formData.state ||
        !formData.companyName) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all required fields.",
        icon: "error"
      });
      return; 
    }
  
    onAddUser(formData);
  
    Swal.fire({
      title: "Good job!",
      text: "User added successfully!",
      icon: "success"
    });
  
    setFormData({
      avatar: '',
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      companyName: ''
    });
  };
  
  return (
    <form>
      <input
        type="text"
        name="avatar"
        placeholder="Please Give Avatar URL"
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
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        required
      />
      <button type="button" onClick={handleAddUser}>Add User</button>
    </form>
  );
};


export default AddUserForm;
