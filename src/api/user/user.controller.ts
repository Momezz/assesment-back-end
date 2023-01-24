import {
  getAllUsers,
  getUserById,
} from "./user.services";

export async function handleAllGetUsers(req, res) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export async function handleGetUser(req, res) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if(!user){
      return res.status(404).json({ message: "User not found" })
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export async function handleCreateUser(req, res) {};

export async function handleUpdateUser(req, res) {};

export async function handleDeleteUser(req, res) {};

