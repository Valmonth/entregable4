import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {


    return (
        <ul className='card'>
      {users.map((user) => (
        <li key={user.id}>
          <div>
          <h3>Name: {user.first_name} {user.last_name}</h3>
          </div>
          <div>
            <b>BirthDay: </b> {user.birthday}
          </div>
          <div>
            <b>Email:</b> {user.email}
          </div>
          <button onClick={() => deleteUser(user.id)}>Eliminar</button>
          <button onClick={() => selectUser(user)}>Editar</button>
        </li>
      ))}
    </ul>
    );
};

export default UsersList;