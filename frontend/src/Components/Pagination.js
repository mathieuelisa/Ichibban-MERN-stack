import { Link } from "react-router-dom";

function Pagination({ page, pages, keyword = "" }) {
  return (
    pages > 1 && (
      <div>
        {[...Array(pages).keys()].map((element) => (
          <Link
            key={element + 1}
            to={
              keyword
                ? `/search/${keyword}/page/${element + 1}`
                : `/page/${element + 1}`
            }
          >
            <p>{element + 1}</p>
          </Link>
        ))}
      </div>
    )
  );
}

export default Pagination;
