import { NavLink } from "react-router-dom";

function Pagination({ page, pages, search = "", isAdmin = false }) {
  return (
    pages > 1 && (
      <div>
        {[...Array(pages).keys()].map((element) => (
          <NavLink
            key={element + 1}
            to={
              !isAdmin
                ? search
                  ? `/search/${search}/page/${element + 1}`
                  : `/page/${element + 1}`
                : `/admin/products/page/${element + 1}`
            }
          >
            {element + 1}
          </NavLink>
        ))}
      </div>
    )
  );
}

export default Pagination;
