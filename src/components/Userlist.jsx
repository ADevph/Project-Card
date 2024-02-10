import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const Userlist= () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const filteredUsers = users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <div className="flex flex-wrap justify-center">
        {filteredUsers.map(user => (
          <div key={user.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userlist;
