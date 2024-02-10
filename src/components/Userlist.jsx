import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center p-4">
      {users.map(user => (
        <div key={user.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default Userlist;
