import { useState, useEffect } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData)
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`}>
            <div key={recipe.id} className="border rounded-lg p-4 shadow transition transform hover:shadow-lg hover:scale-105">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover mb-3 rounded"
              />

              <h2 className="text-lg font-semibold">
                {recipe.title}
              </h2>
              <p className="text-sm text-gray-600">
                {recipe.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage;