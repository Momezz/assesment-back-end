import Favorite, { FavoriteDocument } from "./favorite.model";
import {DocumentDefinition} from 'mongoose';

export function getAllFavorites() {
  return Favorite.find({}, { password: 0 });
}

export function getFavoriteById(id: string) {
  return Favorite.findById(id);
}

export function createFavorite(
  input: DocumentDefinition<Omit<FavoriteDocument, 'createdAt' | 'updatedAt'>>,) {
  return Favorite.create(input);
}

export function updateFavorite(id: String,
  favorite: DocumentDefinition<Omit<FavoriteDocument, 'createdAt' | 'updatedAt'>>,) {
    return Favorite.findByIdAndUpdate(id, favorite, { new: true });
}

export function deleteFavorite(id: string){
  const deleteFavorite = Favorite.findByIdAndDelete(id);
  return deleteFavorite;
}
