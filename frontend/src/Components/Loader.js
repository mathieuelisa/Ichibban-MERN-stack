function Loader({ className, src, logoClassName }) {
  return (
    <div className={className}>
      <h1>L</h1>
      <img className={logoClassName} src={src} alt="logo loading spinner"></img>
      <h1>ADING...</h1>
    </div>
  );
}

export default Loader;
