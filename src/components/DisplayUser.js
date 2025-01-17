"use client";
import { removeUser } from "@/app/redux/slice";
import { useDispatch, useSelector } from "react-redux";

const DisplayUser = () => {
  const users = useSelector((state) => state.usersData.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hi</h1>
      {users.map((user) => (
        <div key={user.id} className="flex">
          <h3 className="px-5">{user.name}</h3>
          <button onClick={() => dispatch(removeUser(user.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayUser;
