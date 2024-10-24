import React from 'react';

const UserTable = ({ users, deleteUser }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>Email</th>
                    <th>Удалить</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><button onClick={() => deleteUser(user.id)}>Удалить</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;