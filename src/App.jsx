import { useState, useEffect } from 'react'
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import axios from 'axios';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);
  console.log(users)

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const addUser = (newUser) => {
    axios
      .post("https://users-crud1.herokuapp.com/users/", newUser)
      .then(() => getUsers())
      .catch((error) => console.log(error.response));
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const deselectUser = () => setUserSelected(null);

  const updateUser = (userUpdated) => {
    console.log(userUpdated);
    const index = users.findIndex(
      (user) => user.id === userUpdated.id
    );
    users[index] = userUpdated;
    setUsers([...users]);
  };

  console.log(userSelected);

  return (
    <div className="App">
      <UsersForm
        addUser={addUser}
        userSelected={userSelected}
        updateUser={updateUser}
        deselectUser={deselectUser}
      />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
    </div>
  );
}

export default App
