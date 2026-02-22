import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import recipesData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id])

  if (!recipe) return <p className='p-6'>Recipe not found!</p>
  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
    {/* Back Button */}
    <button
      onClick={() => navigate(-1)}
      className="mb-6 text-blue-600 hover:underline text-sm"
    >
      ← Back to Recipes
    </button>

    {/* Recipe Card */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {recipe.summary}
        </p>

        {/* Ingredients Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Ingredients
          </h2>

          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Cooking Instructions
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecipeDetail;