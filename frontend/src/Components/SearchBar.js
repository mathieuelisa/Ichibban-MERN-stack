import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produit en cours de recherche");

    if (search.trim()) {
      navigate(`/search/${search}`);
    } else {
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="q"
        id="q"
        placeholder="Rechercher..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit">Valide</button>
    </form>
  );
}

export default SearchBar;
