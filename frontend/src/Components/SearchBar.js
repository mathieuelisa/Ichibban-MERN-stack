import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/search/${search}`);
    } else {
      navigate("/");
    }

    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="searchBar__form">
      <input
        type="text"
        name="q"
        value={search}
        placeholder="Rechercher..."
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar__custom"
      />

      <button type="submit" className="searchBar__button">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default SearchBar;
