
import { Request, Response, NextFunction } from "express";
import {
  getAllFavorites,
  getFavoriteById,
  createFavorite,
  updateFavorite,
  deleteFavorite,
} from "./favorite.services";

export async function handleGetAllFavorites(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const favorites = await getAllFavorites();
    return res.status(200).json(favorites);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetFavoriteById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  const favorite = await getFavoriteById(id);

  if (!favorite) {
    return res.status(404).json({ message: "Favorites not found" });
  }
  return res.status(200).json(favorite);
}

export async function handleCreateFavorite(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  try {
    const newFavorite = await createFavorite(data);
    return res.status(201).json(newFavorite);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateFavorite(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;

  const favorite = await updateFavorite(id, data);
  if (!favorite) {
    return res.status(404).json({ message: "Favorites not found" });
  }

  return res.status(200).json(favorite);
}

export async function handleDeleteFavorite(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    const favorite= await deleteFavorite(id);
    if (!favorite) {
      return res.status(404).json({ message: "Favorites not found" });
    }
    return res.status(200).json({ message: "Favorites deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
}
