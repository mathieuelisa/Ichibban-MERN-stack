function ErrorMessage({ className, children, textClassName }) {
  return (
    <div className={className}>
      <h5 className={textClassName}>{children}</h5>
    </div>
  );
}

export default ErrorMessage;
