"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const Page = () => {
  const users = useSelector((state) => state.usersData.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is page</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <button onClick={() => dispatch(removeUser(user.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Page;
