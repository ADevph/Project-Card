import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {

    const address = user?.address || {};
    const image = user?.avatar || '';
    const fullName = `${user?.firstName || ''} ${user?.lastName || ''}`;
    const email = user?.email || '';
    const company = user?.company || {}; // Changed from companyName to company

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <div>
                    <img src={user.avatar} alt={fullName} /> {/* Changed from user.image to user.avatar */}
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <Link to={`/user/${user?.id}`}>{fullName}</Link>
                </h2>
                <p><strong>Email:</strong> {email}</p>
                <p>
                    <strong>Address:</strong>{' '}
                    {`${address.address || ''}, ${address.city || ''}, ${address.state || ''}`} 
                </p>
                <p><strong>Company:</strong> {company.name || ''}</p> {/* Changed from companyName to company */}
            </div>
        </div>
    );
};

export default UserCard;
