function ErrorMessage({ className, children }) {
  return (
    <div className={className}>
      <h3>ERREUR</h3>
      <h5>{children}</h5>
    </div>
  );
}

export default ErrorMessage;
