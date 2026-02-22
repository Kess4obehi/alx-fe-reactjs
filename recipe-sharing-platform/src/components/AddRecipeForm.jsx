import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 md:p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Add New Recipe
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Error Message */}
          {error && (
            <p className="text-red-600 mb-4 text-center">
              {error}
            </p>
          )}

          {/* Recipe Title */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter recipe title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Ingredients
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="List ingredients, separated by commas"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
          </div>

          {/* Preparation Steps */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">
              Preparation Steps
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Describe the cooking steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;