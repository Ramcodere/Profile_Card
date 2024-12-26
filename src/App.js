
import React from "react";
import "./App.css";

const UserProfileCard = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "+123456789",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  return (
    <div className="App">
      <div className="card">
        {/* Image */}
        <img src={user.photo} alt="User" />
        
        {/* Details */}
        <div className="info">
          <div className="info-row">
            <span className="label">First Name:</span>
            <span className="value">{user.firstName}</span>
          </div>
          <div className="info-row">
            <span className="label">Last Name:</span>
            <span className="value">{user.lastName}</span>
          </div>
          <div className="info-row">
            <span className="label">Phone Number:</span>
            <span className="value">{user.phoneNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
