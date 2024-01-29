const users = [
  {
    id: 1,
    username: "johndoe",
    password: "password1",
    email: "johndoe@example.com"
  },
  {
    id: 2,
    username: "janedoe",
    password: "password2",
    email: "janedoe@example.com"
  },
  {
    id: 3,
    username: "bobsmith",
    password: "password3",
    email: "bobsmith@example.com"
  }
];

// TODO: implement route handlers below for users

const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  // TODO: implement this
  const userId = parseInt(req.params.id);
  const userFound = users.find(user => user.id === userId);

  if (!userFound) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(userFound);
};

const postUser = (req, res) => {
  // TODO: implement this
  const newUser = req.body;

  if (!newUser.username || !newUser.password || !newUser.email) {
    return res.status(400).json({ error: 'Incomplete user information' });
  }

  newUser.id = users.length + 1;
  users.push(newUser);

  res.status(201).json({ message: 'User created successfully', user: newUser });
};

const putUser = (req, res) => {
  // TODO: implement this
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const updatedUser = { ...users[index], ...req.body };
  users[index] = updatedUser;

  res.json({ message: 'User updated successfully', user: updatedUser });
};

// Dummy login, returns user object if username & password match
const postLogin = (req, res) => {
  const userCreds = req.body;
  if (!userCreds.username || !userCreds.password) {
    return res.sendStatus(400);
  }
  const userFound = users.find(user => user.username == userCreds.username);
  // user not found
  if (!userFound) {
    return res.status(403).json({error: 'username/password invalid'});
  }
  // check if posted password matches to user found password
  if (userFound.password === userCreds.password) {
    res.json({message: 'logged in successfully', user: userFound});
  } else {
    return res.status(403).json({error: 'username/password invalid'});
  }
};

export {getUsers, getUserById, postUser, putUser, postLogin};
