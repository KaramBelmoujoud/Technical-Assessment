import React from 'react';

const UserCard = ({ users }) => {
  return (
    <div className="flex flex-wrap justify-around">
      {users.map((user, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img src={user.picture} alt={user.name} className="w-full h-auto rounded-t" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{user.name}</div>
            <p className="text-gray-700 text-base">Email: {user.email}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
