import React, { Component } from 'react';
import UserList from "./features/users/UserList";
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { addUser, deleteUser, updateUsername } from './features/users/UserList';
import "./App.css";

//useDispatch: is used when u have component and u want to do some action
//useSelector: is used when u want to read one of the state value  which u have created in create store
function App() {
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value)

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [newUsername, setNewUsername] = useState("")

  return (
    <div className="App">
      <div className="addUser">
        <input type="text" placeholder="Name..." onChange={(event) => { setName(event.target.value) }} />
        <input type="text" placeholder="Username..." onChange={(event) => { setUsername(event.target.value) }} />
        <button onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username })) }}>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (<div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <input className='input' type="text" placeholder="New Username..."
              onChange={(event) => {
                setNewUsername(event.target.value)

              }} />
            <button className='button' onClick={() => {
              dispatch(updateUsername({ id: user.id, username: newUsername }))
            }}>Update Username</button>
            <button className='button' onClick={() => {
              dispatch(deleteUser({ id: user.id }));
            }}>Delete User</button>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
