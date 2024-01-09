import React from 'react';

const UserDetailsPopup = ({ user, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-md flex">
        {/* Left side: Picture and Name */}
        <div className="mr-8">
          <img className="w-32 h-32 object-cover rounded-full" src={user.image} alt={`${user.firstName} ${user.lastName}'s profile`} />
          <h2 className="text-xl text-black font-bold mt-4">{`${user.firstName} ${user.lastName}`}</h2>
        </div>

        {/* Right side: Details */}
        <div>
          <p className="mb-2 text-gray-700"><strong>Email : </strong> {user.email}</p>
          <p className="mb-2 text-gray-700"><strong>Phone : </strong> {user.phone}</p>
          <p className="mb-2 text-gray-700"><strong>Age : </strong> {user.age}</p>
          <p className="mb-2 text-gray-700"><strong>Gender : </strong> {user.gender}</p>
          <p className="mb-2 text-gray-700"><strong>Adress : </strong>{user.address.address}, {user.address.city} </p>

          {/* Close button */}
          <div className="mt-4 flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPopup;
