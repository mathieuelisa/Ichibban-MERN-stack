import "../App.scss";

function HomePage({ products }) {
  return (
    <div className="homepage__wrapper">
      <h5>Homepage content</h5>
      {products.map((element) => (
        <>
          <p>{element.name}</p>
          <p>{element.rating}</p>
        </>
      ))}
    </div>
  );
}

export default HomePage;
