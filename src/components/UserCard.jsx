import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    const address = user?.address || {};
    const image = user?.avatar || ''; // Ensure a default value for the image URL
    const fullName = `${user?.firstName || ''} ${user?.lastName || ''}`;
    const email = user?.email || '';
    const userAddress = user?.address || {};
    const company = user?.company || {};

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <div>
                    <img src={user.image} alt={fullName} />
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <Link to={`/user/${user?.id}`}>{fullName}</Link>
                </h2>
                <p><strong>Email:</strong> {email}</p>
                <p>
                    <strong>Address:</strong>{' '}
                    {`${user?.address.address || ''}, ${user?.address.city || ''}, ${user?.address.state || ''}`}
                </p>
                <p><strong>Company:</strong> {company.name || ''}</p>
            </div>
        </div>
    );
};

export default UserCard;
