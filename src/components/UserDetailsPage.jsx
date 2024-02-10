import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetailsPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={user.image} alt={`${user.firstName} ${user.lastName}`} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{`${user.firstName} ${user.lastName}`}</div>
            <p className="mt-2 text-gray-500">{user.email}</p>
            <p className="mt-2 text-gray-500">{`${user.address.address}, ${user.address.city}, ${user.address.state}`}</p>
            <p className="mt-2 text-gray-500">Company: {user.company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
