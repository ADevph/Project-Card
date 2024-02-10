import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const address = user?.address || {};
  const image = user?.avatar || "";
  const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`;
  const email = user?.email || "";
  const company = user?.company || {};

  return (
    <div className="flex bg-sky-100 bg-opacity-30 shadow-lg rounded-lg">
      <div className="ml-2">
        <figure>
          <div>
            <img src={user.avatar ? user.avatar : user.image} alt={fullName} />
          </div>
        </figure>
        <div className="card-body ml-6 p-1">
          <h2 className=" font-bold ">
            <Link to={`/user/${user?.id}`}>
              Fullname: <span className="text-blue-600">{fullName}</span>
            </Link>
          </h2>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Address:</strong>{" "}
            {`${address.address || user.address}, ${
              address.city || user.city
            }, ${address.state || user.state}`}
          </p>
          <p>
            <strong>Company:</strong> {company.name || user.companyName || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
