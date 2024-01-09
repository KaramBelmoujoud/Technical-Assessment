import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../Components/Search';
import UserDetailsPopup from '../Components/UserDetailsPopup';

function Users() {
  const [usersData, setUsersData] = useState({ users: [], total: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err.message);
      });
  }, []);

  
  useEffect(() => {
    // Apply filtering based on the search query
    const filtered = usersData.users.filter((user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update filtered users and reset current page to 1
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchQuery, usersData.users]);

  const indexOfLastUser = currentPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

const handleDeleteUser = (userId) => {
    axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then((res) => {
        // Assuming a successful delete, update the usersData state
        // to reflect the changes. You might want to handle errors as well.
        setUsersData((prevData) => ({
          users: prevData.users.filter((user) => user.id !== userId),
          total: prevData.total - 1,
        }));
      })
      .catch((err) => {
        console.error(`Error deleting user with ID ${userId}:`, err.message);
      });
  };

  const openDetailsPopup = (userId) => {
    axios
      .get(`http://localhost:5000/users/${userId}`)
      .then((res) => {
        setSelectedUser(res.data);
      })
      .catch((err) => {
        console.error(`Error fetching user details with ID ${userId}:`, err.message);
      });
  };

  const closeDetailsPopup = () => {
    setSelectedUser(null);
  };


  return (
    <div className='justify-center p-4 overflow-hidden'>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
    
      <div className="flex flex-wrap justify-center p-4">
        {currentUsers.map((user) => (
          <div key={user.id} className="max-w-sm backdrop-blur-xl backdrop-brightness-105 rounded overflow-hidden shadow-lg m-4">
            <img className="w-full h-64 object-cover" src={user.image} alt={`${user.firstName} ${user.lastName}'s profile`} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{`${user.firstName} ${user.lastName}`}</div>
              <p className="text-gray-700 text-base mb-2">Email: {user.email}</p>
              <p className="text-gray-700 text-base">Phone: {user.phone}</p>
            <div className='flex flex-row justify-center items-center'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={()=>openDetailsPopup(user.id)}>Details</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4" onClick={()=>handleDeleteUser(user.id)}>Delete</button>
            </div>
              </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {selectedUser && (
        <UserDetailsPopup user={selectedUser} onClose={closeDetailsPopup} />
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-teal-500 rounded-l bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastUser >= filteredUsers.length}
          className="px-4 py-2 border border-teal-500 rounded-r bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Users;
