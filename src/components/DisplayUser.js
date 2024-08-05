"use client";
import { removeUser } from "@/app/redux/slice";
import { useDispatch, useSelector } from "react-redux";

const DisplayUser = () => {
  const userData = useSelector((data) => data.users);
  console.log(userData);
  const deleteUser = useDispatch();
  return (
    <div>
      <h1>Hi</h1>
      {userData.map((user) => {
        return (
          <div key={user.id} className="flex ">
            <h3 className="px-5">{user.name}</h3>
            <button onClick={() => deleteUser(removeUser(user.id))}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayUser;
