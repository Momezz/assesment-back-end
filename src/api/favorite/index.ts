import { Router } from "express";
import {
  handleGetAllFavorites,
  handleGetFavoriteById,
  handleCreateFavorite,
  handleUpdateFavorite,
  handleDeleteFavorite
} from "./favorite.controller";

const router = Router();

// GET /api/favorite
router.get("/", handleGetAllFavorites);
// GET /api/favorite/:id
router.get("/:id", handleGetFavoriteById);
// POST /api/favorite
router.post("/", handleCreateFavorite);
// PATCH /api/favorite/:id
router.patch('/:id', handleUpdateFavorite);
// DELETE /api/favorite/:id
router.delete('/:id', handleDeleteFavorite);

export default router;
