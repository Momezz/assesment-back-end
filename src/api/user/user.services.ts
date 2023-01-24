import User from "./user.model";

export function getAllUsers() {
  return User.find().sort({ createdAT: -1 });
}

export function getUserById(id) {
  const user = User.findById(id);
  return user;
}

export function getUserByField(field, value) {
  User.find({ email: value, name: value});
}

export function createUser(user){
  return User.create(user);
}

export function updateUser(id, user){
  const updateUser = User.findByIdAndUpdate(id, user, { new: true });
  return updateUser;
}
