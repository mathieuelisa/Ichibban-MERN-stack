const pageNotFound = (req, res, next) => {
  const pageError = new Error(
    `Your page ${req.originalUrl} isn't found, sorry`
  );
  res.status(404);
  next(pageError);
};

export default pageNotFound;
