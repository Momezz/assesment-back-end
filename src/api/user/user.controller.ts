import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {
  getAllUsers,
  getUserById,
  getUserFilter,
  deleteUser,
  updateUser,
  createUser
} from "./user.services";

export async function handleAllGetUsers(
  req: Request,
  res: Response,
  next: NextFunction) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export async function handleGetUser(
  req: Request,
  res: Response,
  next: NextFunction) {
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

export async function handleCreateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  try {
    const user = await createUser(data);
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export async function handleUpdateUser(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;

  try {
    const user = await updateUser(id, data);

    if (!user) {
      return res.status(404).json({ message: "User not found to update" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleDeleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    await deleteUser(id);
    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export async function handleLoginUser(
  req: Request,
  res: Response,
  next: NextFunction) {
    const { email, password } = req.body;
    try {
      const user = await getUserFilter({ email });
      console.log(user);
      if(!user){
        return res.status(404).json({ message: "User not found" })
      }
      const validPassword = await user.comparePassword(password);

      if (!validPassword) {
        return res.status(401).json({ messag: "invalid password" });
      }

      const payload = user
      // Generate token JWT
      const token =  jwt.sign(payload, 'EL_SECRETO_DE_AMOR');

      return res.status(200).json({ user, token });
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
