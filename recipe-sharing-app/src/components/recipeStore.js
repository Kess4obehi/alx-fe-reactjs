import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // Recipe list
  recipes: [],

  // Favorites
  favorites: [],

  // Add recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Update recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Add favorite
  addFavorite: (id) =>
    set((state) => ({
      favorites: [...state.favorites, id],
    })),

  // Remove favorite
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),
}));

export default useRecipeStore;