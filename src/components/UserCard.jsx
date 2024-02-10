import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {

    const address = user?.address || {};
    const image = user?.avatar || ''; 
    const fullName = `${user?.firstName || ''} ${user?.lastName || ''}`;
    const email = user?.email || '';
    const company = user?.company || {};

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <div>
                    <img src={user.avatar ? user.avatar : user.image} alt={fullName} />
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <Link to={`/user/${user?.id}`}>{fullName}</Link>
                </h2>
                <p><strong>Email:</strong> {email}</p>
                <p>
                    <strong>Address:</strong>{' '}
                    {`${address.address || user.address}, ${address.city || user.city }, ${address.state || user.state}`} 
                </p>
                <p><strong>Company:</strong> {company.name || user.companyName || ''}</p>
            </div>
        </div>
    );
};

export default UserCard;
