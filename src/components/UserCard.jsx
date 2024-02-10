import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    const address = user?.address || {};
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <div className= ''>
        <img src={user?.image} alt={`${user?.firstName} ${user?.lastName}`} />

        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <Link to={`/user/${user.id}`}>{`${user.firstName} ${user.lastName}`}</Link>
        </h2>
        <p><strong>Email:</strong> {user?.email}</p>
        <p>
          <strong>Address:</strong>{' '}
          {`${user?.address.address}, ${user?.address.city}, ${user?.address.state}`}
        </p>
        <p><strong>Company:</strong> {user?.company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
