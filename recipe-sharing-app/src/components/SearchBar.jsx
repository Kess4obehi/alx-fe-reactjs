import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    const term = e.target.value;

    setSearchTerm(term);

    filterRecipes(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;