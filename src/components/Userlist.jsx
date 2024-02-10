import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import AddUserForm from "./AddUserForm";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const filteredUsers = users
    .filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => {
      if (sortCriteria) {
        const valueA = (
          sortCriteria === "company.name" ? a.company?.name : a[sortCriteria]
        )?.toLowerCase();
        const valueB = (
          sortCriteria === "company.name" ? b.company?.name : b[sortCriteria]
        )?.toLowerCase();

        if (sortDirection === "asc") {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      }
      return 0;
    });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (criteria) => {
    if (criteria === sortCriteria) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortDirection("asc");
    }
  };

  const handleAddUser = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className="p-2">
      <div className="flex justify-between mb-2">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-64 p-2 border border-gray-600 rounded-md"
        />
       <div className="flex">
  <select
    value="all"
    onChange={(e) => handleSortChange(e.target.value)}
    className="px-2 py-1 border border-gray-600 rounded-md"
  >
    <option value="all">All</option>
    <option value="firstName">Sort by Name</option>
    <option value="email">Sort by Email</option>
    <option value="company.name">Sort by Company</option>
  </select>
</div>

      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4 text-center font-semibold">Add New User</h2>
        <div className="border border-gray-300 p-2 rounded-lg">
          <AddUserForm onAddUser={handleAddUser} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
          >
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userlist;
