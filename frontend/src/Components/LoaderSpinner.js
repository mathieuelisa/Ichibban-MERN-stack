function LoaderSpinner({ className, src, logoClassName }) {
  return (
    <div className={className}>
      <img className={logoClassName} src={src} alt="logo loading spinner"></img>
    </div>
  );
}

export default LoaderSpinner;
