import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UsersForm = ({
  addUser,
  userSelected,
  updateUser,
  deselectUser
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      setFirstName(userSelected.firstName);
      setLastName(userSelected.lastName);
      setBirthday(userSelected.birthday);
      setEmail(userSelected.email);
      setPassword(userSelected.password);
    } else {
      reset();
    }
  }, [userSelected]);

  const submit = (e) => {
    e.preventDefault();
    const user = {
      last_name: lastName,
      first_name: firstName,
      birthday: birthday,
      email: email,
      password: password
    };
    if (userSelected !== null) {
      // Actualizando
      user.id = userSelected.id;
      updateUser(user);
      deselectUser();
    } else {
      addUser(user);
      reset();
    }
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setBirthday("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={submit}>
      <h1>Hello App Users Form</h1>
      <div className="forms">
      <div className="input-container">
        <label className="label" htmlFor="firstname">Name</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>

      <div className="input-container">
        <label className="label"htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>
      <div className="input-container">
        <label className="label" htmlFor="birthday">Birthday</label>
        <input
          type="date"
          id="birthday"
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday}
        />
      </div>

      <div className="input-container">
        <label className="label" htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="input-container">
        <label className="label" htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <button>{userSelected !== null ? "Update" : "Create"}</button>
      {userSelected !== null && (
        <button onClick={deselectUser} type="button">
          Clear
        </button>
      )}
      </div>
    </form>
  );
};

export default UsersForm;