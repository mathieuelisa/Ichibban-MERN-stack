function ErrorMessage({ className, children, textClassName }) {
  return (
    <div className={className}>
      <h3>ERREUR</h3>
      <h5 className={textClassName}>{children}</h5>
    </div>
  );
}

export default ErrorMessage;
