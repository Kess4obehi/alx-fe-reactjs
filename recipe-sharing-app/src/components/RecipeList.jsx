import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h2>Recipes</h2>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <button
            onClick={() =>
              favorites.includes(recipe.id)
                ? removeFavorite(recipe.id)
                : addFavorite(recipe.id)
            }
          >
            {favorites.includes(recipe.id) ? "Remove Favorite" : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;