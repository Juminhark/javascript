//? 8. Module export
//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

let users = ['Nick', 'Lynn', 'Dal'];

const addUser = (user) => (users = [...users, user]);

const getUsers = () => users;

const deleteUser = (user) => (users = users.filter((aUser) => aUser !== user));

export { addUser, getUsers, deleteUser };
