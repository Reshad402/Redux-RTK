"use client";
import { useSelector } from "react-redux";

const DisplayUser = () => {
  const userData = useSelector((data) => data.users);
  console.log(userData);
  return (
    <div>
      <h1>Hi</h1>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayUser;
