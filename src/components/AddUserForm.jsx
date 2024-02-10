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
    <div className="max-w-md mx-auto bg-white rounded p-4 border border-gray-300">
      <form>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="pr-4 pb-2">
                <label htmlFor="avatar" className="block text-sm font-semibold">Avatar URL:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="avatar"
                  className="w-full border border-gray-300 rounded py-2 px-3 text-sm"
                  placeholder="Please Give Avatar URL"
                  value={formData.avatar}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4 pb-2">
                <label htmlFor="firstName" className="block text-sm font-semibold">First Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="firstName"
                  className="w-full border border-gray-300 rounded py-2 px-3 text-sm"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4 pb-2">
                <label htmlFor="lastName" className="block text-sm font-semibold">Last Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="lastName"
                  className="w-full border border-gray-300 rounded py-2 px-3 text-sm"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4 pb-2">
                <label htmlFor="email" className="block text-sm font-semibold">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded py-2 px-3 text-sm"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4 pb-2">
                <label htmlFor="address" className="block text-sm font-semibold">Address:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="address"
                  className="w-full border border-gray-300 rounded py-2 px-3 text-sm"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4 pb-2">
                <label htmlFor="city" className="block text-sm font-semibold">City:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="city"
                  className="w-full border border-gray-300 rounded py-2 px-3 text-sm"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4 pb-2">
                <label htmlFor="state" className="block text-sm font-semibold">State:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="state"
                  className="w-full border border-gray-300 rounded py-2 px-3 text-sm"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4 pb-2">
                <label htmlFor="companyName" className="block text-sm font-semibold">Company Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="companyName"
                  className="w-full border border-gray-300 rounded py-2 px-3 text-sm"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <button 
            type="button" 
            onClick={handleAddUser}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
