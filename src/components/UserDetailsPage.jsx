import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const UserDetailsPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;

    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, [userId]);

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex">
          <p className="font-semibold"> Please wait ...</p>
          <div>
            <RotatingLines
              visible={true}
              height="36"
              width="42"
              color="blue"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      </div>
    );

  return (
    <div className="p-4 justify-center items-center mt-6">
      <div className="max-w-lg mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0 ">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
            />
          </div>
          <div className="p-8 text-center">
            <div className=" font-bold text-black text-xl">
              Fullname:{" "}
              <span className="text-blue-600">{`${user.firstName} ${user.lastName}`}</span>
            </div>
            <p className="mt-2 font-bold text-black">Email: {user.email}</p>
            {user.address && (
              <p className="mt-2 font-bold">
                Address:{" "}
                {`${user.address.address}, ${user.address.city}, ${user.address.state}`}
              </p>
            )}
            {user.company && (
              <p className="mt-2 font-bold text-black">
                Company: {user.company.name}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10 justify-center items-center text-center">
        <Link
          to="/"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default UserDetailsPage;
