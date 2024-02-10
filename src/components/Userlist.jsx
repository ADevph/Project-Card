import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const filteredUsers = users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  }).sort((a, b) => {
    if (sortCriteria) {
      const valueA = (sortCriteria === 'company.name' ? a.company?.name : a[sortCriteria])?.toLowerCase();
      const valueB = (sortCriteria === 'company.name' ? b.company?.name : b[sortCriteria])?.toLowerCase();
  
      if (sortDirection === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    }
    return 0;
  });
  

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = criteria => {
    if (criteria === sortCriteria) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCriteria(criteria);
      setSortDirection('asc');
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 mb-4 border rounded-md"
        />
        <div className="flex">
          <button className="mr-2" onClick={() => handleSortChange('firstName')}>Sort by Name</button>
          <button className="mr-2" onClick={() => handleSortChange('email')}>Sort by Email</button>
          <button onClick={() => handleSortChange('company.name')}>Sort by Company</button>
        </div>
      </div>
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
