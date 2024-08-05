"use client";
import { addUser } from "@/app/redux/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddUser = () => {
  const [name, setName] = useState("");
  const disPatch = useDispatch();
  const inputName = (e) => {
    setName(e.target.value);
  };

  const userDispatch = () => {
    disPatch(addUser(name));
  };

  return (
    <div className="text-center">
      <h1 className="p-5 text-3xl ">Add new User</h1>
      <input onBlur={inputName} type="text" name="name" placeholder="Name" />
      <button onClick={() => userDispatch()}>Add User</button>
    </div>
  );
};

export default AddUser;
